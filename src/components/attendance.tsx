import { useState } from "react"
import { Calendar, Filter, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AttendanceChart from "@/components/AttendanceChart"
import AttendanceTable from "@/components/attendance-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AttendanceProps {
  onDashboardClick?: () => void;
}

export default function Attendance({ onDashboardClick }: AttendanceProps = {}) {
  const [showCarts, setShowCarts] = useState(true)

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Attendance</h1>
            <p className="text-muted-foreground">
              <span
                className="cursor-pointer hover:underline"
                onClick={onDashboardClick}
              >
                Daily monitoring
              </span> / <span className="font-medium text-black">Attendance</span> 
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Show carts</span>
              <Switch checked={showCarts} onCheckedChange={setShowCarts} />
            </div>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </Button>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Show carts</span>
              <Switch checked={showCarts} onCheckedChange={setShowCarts} />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Actions <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => {}}>
                  <Calendar className="h-4 w-4 mr-2" /> Date
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {}}>
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Chart Card */}
        {showCarts && (
          <Card className="!rounded-3xl pb-10">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Student attendance schedule</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <AttendanceChart />
            </CardContent>
          </Card>
        )}
        
        <div className="overflow-hidden">
          <AttendanceTable />
        </div>
      </div>
    </div>
  )
}
