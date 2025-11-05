/**
 * Babel Plugin: Phoenix Inspector
 *
 * Injects source location metadata into JSX elements during Next.js build
 * Works with Next.js webpack/babel pipeline
 */

const crypto = require('crypto');
const path = require('path');

/**
 * Generate deterministic node ID
 */
function generateNodeId(data) {
  const content = `${data.file}:${data.line}:${data.col}:${data.tag}:${data.classTokens}`;
  return crypto.createHash('sha256').update(content).digest('hex').slice(0, 16);
}

/**
 * Extract class names from JSX attributes
 */
function extractClassNames(attributes) {
  const classes = [];

  for (const attr of attributes) {
    if (attr.name && attr.name.name === 'className') {
      if (attr.value && attr.value.type === 'StringLiteral') {
        classes.push(...attr.value.value.split(' ').filter(Boolean));
      }
    }
  }

  return classes;
}

/**
 * Babel plugin export
 */
module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: 'babel-phoenix-inspector',

    visitor: {
      JSXOpeningElement(path, state) {
        const { filename } = this.file.opts;
        const options = state.opts || {};

        // Skip if not enabled or no filename
        if (!filename || filename.includes('node_modules')) {
          return;
        }

        // Get relative path from project root
        const cwd = process.cwd();
        const relativePath = './' + path.relative(cwd, filename).replace(/\\/g, '/');

        // Get source location
        const line = path.node.loc?.start.line || 0;
        const col = path.node.loc?.start.column || 0;

        // Get element tag
        const tag = path.node.name.name || 'unknown';

        // Extract class names
        const classTokens = extractClassNames(path.node.attributes);

        // Generate stable nodeId
        const nodeId = generateNodeId({
          file: relativePath,
          line,
          col,
          tag,
          classTokens: classTokens.join(' ')
        });

        // Check if attributes already exist (avoid duplicates)
        const hasPhoenixAttrs = path.node.attributes.some(
          attr => attr.name && attr.name.name && attr.name.name.startsWith('data-phoenix-')
        );

        if (hasPhoenixAttrs) {
          return; // Already stamped
        }

        // Inject data attributes
        const phoenixAttrs = [
          t.jsxAttribute(
            t.jsxIdentifier('data-phoenix-source'),
            t.stringLiteral(relativePath)
          ),
          t.jsxAttribute(
            t.jsxIdentifier('data-phoenix-line'),
            t.stringLiteral(line.toString())
          ),
          t.jsxAttribute(
            t.jsxIdentifier('data-phoenix-col'),
            t.stringLiteral(col.toString())
          ),
          t.jsxAttribute(
            t.jsxIdentifier('data-phoenix-id'),
            t.stringLiteral(nodeId)
          )
        ];

        // Add attributes to the opening element
        path.node.attributes.push(...phoenixAttrs);
      }
    }
  };
};
