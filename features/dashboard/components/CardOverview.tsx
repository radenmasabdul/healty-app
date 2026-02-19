import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

type CardOverviewProps = {
  id: string;
  label: string;
  value: number | string;
  icon: LucideIcon;
  tren: string;
  trenUp: boolean;
  color: string;
  bg: string;
  borderColor: string;
  textColor?: string;
};

export default function CardOverview({
  id,
  label,
  value,
  icon: Icon,
  tren,
  trenUp,
  color,
  bg,
  borderColor,
  textColor = "" }: CardOverviewProps) {
    return (
      <Card className={`bg-surface border-0 border-l-4 ${borderColor}`} key={id}>
        <CardContent className="p-4">
          <div className={`flex items-center justify-between mb-3 ${textColor}`}>
            <p className="text-xs text-secondary font-medium uppercase tracking-wide">{label}</p>
              <div className={`p-2 rounded-lg ${bg}`}>
                <span className={color}>
                  <Icon className="w-4 h-4"/>
                </span>
              </div>
          </div>
          
          <p className="text-xl font-bold text-primary">{value}</p>
          
          <div className="flex items-center gap-1 mt-1">
            {trenUp ? (
              <Icon size={13} className="text-emerald-500" />
            ) : (
              <Icon size={13} className="text-rose-500" />
            )}
            <span className={`text-xs font-medium ${ trenUp ? "text-emerald-500" : "text-rose-500"}`}>
              {tren} from last period
            </span>
          </div>
        </CardContent>
    </Card>
  )
}