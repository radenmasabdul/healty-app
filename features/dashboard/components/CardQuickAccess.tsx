import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CardQuickAccess = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    lightColor: string;
    textColor: string;
    borderColor: string;
    stats: string;
    trend: string;
    trendIcon: LucideIcon;
    trendColor: string;
};

export default function CardQuickAccess({
    id,
    title,
    description,
    href,
    icon: Icon,
    lightColor,
    textColor,
    borderColor,
    stats,
    trend,
    trendIcon: TrendIcon,
    trendColor,
}: CardQuickAccess) {
    return (
        <Link href={href} className="block" key={id}>
            <Card className={`bg-surface border-0 border-l-4 ${borderColor}`}>
                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-xl ${lightColor}`}>
                            <Icon className={`w-5 h-5 ${textColor}`} />
                        </div>

                        <ArrowRight size={18}
                            className="text-tertiary group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 mt-1"
                        />
                    </div>

                    <CardTitle className="text-lg text-primary mt-3">
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                    <p className="text-sm text-secondary mb-4">{description}</p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-default">
                        <span className="text-sm font-medium text-primary">{stats}</span>
                        
                        <div className="flex items-center gap-1">
                            <TrendIcon size={14} className={trendColor} />
                            <span className={`text-xs font-medium ${trendColor}`}>{trend}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
};