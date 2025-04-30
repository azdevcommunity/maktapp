import { StatsCard } from "@/components/stats-card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import RefreshIcon from "@/components/icons/RefreshIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import { Spacer } from "@/components/ui/spacer";
import Attendance from "@/components/attendance";
import LessonScheduleTable from "@/components/lesson-schedule-table";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DashboardOverview = () => {
  const [showCharts, setShowCharts] = useState(true);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleDashboardClick = () => {
    setShowAttendance(false);
  };

  return (
    <div className="z-40 w-full">
      <div className="p-4 sm:p-6 md:p-8 pt-0 md:px-6">
        {!showAttendance ? (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pt-6">
              <h1 className="text-xl sm:text-2xl font-semibold">Daily monitoring : 15.05.2025</h1>

              {/* Desktop Controls */}
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Show charts</span>
                  <Switch checked={showCharts} onCheckedChange={setShowCharts} className="data-[state=checked]:!bg-green !shadow-none" />
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

                <Button
                  variant={showAttendance ? "outline" : "default"}
                  size="sm"
                  className={`font-medium ${!showAttendance ? "bg-brand-500 hover:bg-brand-600" : ""}`}
                  onClick={() => setShowAttendance(!showAttendance)}
                >
                  {showAttendance ? "Dashboard" : "Attendance"}
                </Button>
              </div>

              {/* Mobile Controls */}
              <div className="flex md:hidden w-full sm:w-auto items-center gap-3 justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Show charts</span>
                  <Switch checked={showCharts} onCheckedChange={setShowCharts} className="data-[state=checked]:!bg-green !shadow-none" />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      Actions <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => {}}>
                      <CalendarIcon className="h-4 w-4 mr-2" /> Today
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>
                      <FilterIcon className="h-4 w-4 mr-2" /> Filter
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>
                      <RefreshIcon className="h-4 w-4 mr-2" /> Refresh
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowAttendance(!showAttendance)}>
                      {showAttendance ? "Dashboard" : "Attendance"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {showCharts && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
            )}
            <Spacer y={20} className="sm:y-30" />
            <div className="overflow-hidden">
              <LessonScheduleTable />
            </div>
          </>
        ) : (
          <div className="mt-4">
            <Attendance onDashboardClick={handleDashboardClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview; 