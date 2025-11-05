import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: (config, { dev, isServer }) => {
    // Phoenix Inspector - inject source location metadata
    if (!isServer && process.env.PHOENIX_INSPECTOR === '1') {
      try {
        const BabelPluginPhoenixInspector = require('./phoenixWorkspaces/buildingSystem/plugins/babel-phoenix-inspector');

        config.module.rules.forEach(rule => {
          if (rule.use && rule.use.loader === 'babel-loader') {
            rule.use.options = rule.use.options || {};
            rule.use.options.plugins = rule.use.options.plugins || [];
            rule.use.options.plugins.push([
              BabelPluginPhoenixInspector,
              {
                projectId: process.env.PHOENIX_PROJECT_ID || '25591ec6-50e0-4850-8a04-6b3522ce2eee',
                gitSha: process.env.PHOENIX_GIT_SHA || 'f303e62e'
              }
            ]);
          }
        });
      } catch (error) {
        // Phoenix Inspector plugin not found, skipping
        console.warn('Phoenix Inspector plugin not found, skipping...');
      }
    }

    return config;
  },

  // Absolutely lenient configuration - never fail builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Moved from experimental in Next.js 15+
  outputFileTracingRoot: process.cwd(),

  // Simple image configuration
  images: {
    unoptimized: true,
  },

  // Basic performance settings
  poweredByHeader: false,

  // Flexible iframe embedding
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
  },
};

export default nextConfig;
