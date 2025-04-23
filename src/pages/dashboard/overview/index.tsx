import { StatsCard } from "@/components/stats-card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import RefreshIcon from "@/components/icons/RefreshIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";

const DashboardOverview = () => {
  const [showCharts, setShowCharts] = useState(true);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Daily monitoring : 15.05.2025</h1>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Show charts</span>
            <Switch checked={showCharts} onCheckedChange={setShowCharts} className="data-[state=checked]:!bg-green !shadow-none"/>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1 font-medium">
            <CalendarIcon className="h-4 w-4" />
            Today
          </Button>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1 font-medium">
            <FilterIcon className="h-4 w-4" />
            Filter
          </Button>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1 font-medium">
            <RefreshIcon className="h-4 w-4" />
            Refresh
          </Button>
          
          <Button variant="default" size="sm" className="bg-brand-500 hover:bg-brand-600 font-medium">
            Attendance
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard
          title="All school"
          leftSection={{
            title: "Lesson",
            percentage: 96,
            stats: [
              { label: "Scheduled lessons", value: 99, color: "primary" },
              { label: "Completed lessons", value: 92, color: "primary" },
            ],
          }}
          rightSection={{
            title: "Attendance",
            percentage: 88,
            stats: [
              { label: "Quanity of students", value: 317, color: "secondary" },
              { label: "Participating students", value: 216, color: "secondary" },
            ],
          }}
        />

        <StatsCard
          title="Primary school"
          leftSection={{
            title: "Lesson",
            percentage: 96,
            stats: [
              { label: "Scheduled lessons", value: 99, color: "primary" },
              { label: "Completed lessons", value: 92, color: "primary" },
            ],
          }}
          rightSection={{
            title: "Attendance",
            percentage: 88,
            stats: [
              { label: "Quanity of students", value: 317, color: "secondary" },
              { label: "Participating students", value: 216, color: "secondary" },
            ],
          }}
        />
        <StatsCard
          title="Secondary school"
          leftSection={{
            title: "Lesson",
            percentage: 96,
            stats: [
              { label: "Scheduled lessons", value: 99, color: "primary" },
              { label: "Completed lessons", value: 92, color: "primary" },
            ],
          }}
          rightSection={{
            title: "Attendance",
            percentage: 88,
            stats: [
              { label: "Quanity of students", value: 317, color: "secondary" },
              { label: "Participating students", value: 216, color: "secondary" },
            ],
          }}
        />
        <StatsCard
          title="High school"
          leftSection={{
            title: "Lesson",
            percentage: 96,
            stats: [
              { label: "Scheduled lessons", value: 99, color: "primary" },
              { label: "Completed lessons", value: 92, color: "primary" },
            ],
          }}
          rightSection={{
            title: "Attendance",
            percentage: 88,
            stats: [
              { label: "Quanity of students", value: 317, color: "secondary" },
              { label: "Participating students", value: 216, color: "secondary" },
            ],
          }}
        />

      </div>
    </div>
  );
};

export default DashboardOverview; 