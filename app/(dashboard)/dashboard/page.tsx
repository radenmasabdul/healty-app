import PageContainer from "@/components/global/PageContainer";
import GlobalHeader from "@/components/global/GlobalHeader";
import CardOverview from "@/features/dashboard/components/CardOverview";
import CardQuickAccess from "@/features/dashboard/components/CardQuickAccess";
import CardRecentActivity from '@/features/dashboard/components/CardRecentActivity';
import { menuCards, summaryStats, recentActivity } from '@/features/dashboard/store/data';

export default function page() {
  return (
    <PageContainer>
      <GlobalHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening today."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat) => (
          <CardOverview
            key={stat.label}
            {...stat}
          />
        ))}
      </div>

      <div>
        <h2 className="text-base font-semibold text-primary mb-3">
          Quick Access
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuCards.map((card) => (
            <CardQuickAccess
              key={card.title}
              {...card}
            />
          ))}
        </div>
      </div>

      <div className='grid gap-4'>
        <h2 className="text-base font-semibold text-primary mb-3">
          Recent Activity
        </h2>
          {recentActivity.map((activity, index) => (
            <CardRecentActivity
              key={activity.id}
              {...activity}
              isLast={index === recentActivity.length - 1}
            />
          ))}
      </div>
    </PageContainer>
  )
};