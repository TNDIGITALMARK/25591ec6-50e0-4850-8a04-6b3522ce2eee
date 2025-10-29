import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType = 'neutral', icon: Icon }: StatCardProps) {
  const changeColorClass =
    changeType === 'positive'
      ? 'text-green-600'
      : changeType === 'negative'
      ? 'text-red-600'
      : 'text-gray-600';

  return (
    <Card className="shadow-card hover:shadow-card-hover transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <p className={`text-sm font-medium mt-1 ${changeColorClass}`}>
                {change}
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-blue-accent rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
