import { Card, CardContent } from "@/components/ui/card";

type ActivityType = "product" | "stock" | "alert";

type CardRecentActivityProps = {
  id: string;
  title: string;
  detail: string;
  time: string;
  type: ActivityType;
  isLast?: boolean;
};

const ColorMap: Record<ActivityType, {
  dot: string;
  border: string;
}> = {
  product: {
    dot: "bg-blue-500",
    border: "border-blue-500",
  },
  stock: {
    dot: "bg-emerald-500",
    border: "border-emerald-500",
  },
  alert: {
    dot: "bg-rose-500",
    border: "border-rose-500",
  },
};

export default function CardRecentActivity({
  id,
  title,
  detail,
  time,
  type,
  isLast = false,
}: CardRecentActivityProps) {
  const { dot, border } = ColorMap[type];

  return (
    <Card
      key={id}
      className={`bg-surface border-0 border-l-4 ${border} ${
        !isLast ? "border-b-0" : ""
      }`}
    >
      <CardContent
        className={`flex items-start gap-3 p-4 ${
          !isLast ? "border-b border-default" : ""
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full mt-2 shrink-0 ${dot}`}
        />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-primary">{title}</p>
          <p className="text-xs text-secondary truncate">{detail}</p>
        </div>

        <span className="text-xs text-tertiary shrink-0">
          {time}
        </span>
      </CardContent>
    </Card>
  );
}
