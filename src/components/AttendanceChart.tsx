import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot, Tooltip } from "recharts"

// Sample data for the chart
export const attendanceData = [
    { lesson: "1Lesson", participated: 100, didNotParticipate: 40 },
    { lesson: "2Lesson", participated: 170, didNotParticipate: 150 },
    { lesson: "3Lesson", participated: 180, didNotParticipate: 130 },
    { lesson: "4Lesson", participated: 160, didNotParticipate: 100 },
    { lesson: "5Lesson", participated: 170, didNotParticipate: 50 },
    { lesson: "6Lesson", participated: 190, didNotParticipate: 20 },
    { lesson: "7Lesson", participated: 200, didNotParticipate: 40 },
    { lesson: "8Lesson", participated: 150, didNotParticipate: 100 },
    { lesson: "9Lesson", participated: 120, didNotParticipate: 150 },
    { lesson: "10Lesson", participated: 90, didNotParticipate: 180 },
    { lesson: "11Lesson", participated: 60, didNotParticipate: 150 },
    { lesson: "12Lesson", participated: 40, didNotParticipate: 120 },
    { lesson: "13Lesson", participated: 30, didNotParticipate: 160 },
    { lesson: "14Lesson", participated: 20, didNotParticipate: 170 },
    { lesson: "15Lesson", participated: 10, didNotParticipate: 180 },
]

const chartMargins = { top: 20, right: 30, left: 0, bottom: 20 };

export type PersistedHoverDataType = {
    lesson: string;
    line: "participated" | "didNotParticipate";
    value: number;
    cx: number | null;
    cy: number | null;
} | null;

const CHART_GREEN = '#00BC55';
const CHART_RED = '#FF3A3A';

const CustomTooltip = ({ data }: { data: PersistedHoverDataType }) => {
    if (!data) {
        return null;
    }

    const { line, value } = data;
    const isParticipated = line === "participated";

    return (
        <div className="relative pointer-events-none z-[1000]">
            <div
                className={`${isParticipated
                    ? "bg-[#00BC551F] border-[#00BC55]"
                    : "bg-[#bc00001f] border-[#fc2828]"
                    } rounded-full px-4 py-2 border-2 w-full whitespace-nowrap`}
            >
                <p className="text-sm font-medium text-[#333333]">
                    {isParticipated ? "Participated" : "Did not participate"} {value}
                </p>
            </div>
            <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          ${isParticipated
                        ? "border-t-[10px] border-t-[#00BC55]"
                        : "border-t-[10px] border-t-[#fc2828]"
                    }`}
            ></div>
        </div>
    );
};

interface AttendanceChartProps {
    data?: typeof attendanceData;
}

export default function AttendanceChart({ data = attendanceData }: AttendanceChartProps) {
    const [persistedHoverData, setPersistedHoverData] = useState<PersistedHoverDataType>(null);

    const handleChartHover = (e: any) => {
        if (e.activeTooltipIndex === undefined || e.activeTooltipIndex === null) {
            if (persistedHoverData !== null) {
                setPersistedHoverData(null);
            }
            return;
        }

        if (
            !e ||
            !e.activeCoordinate ||
            !e.activePayload ||
            e.activePayload.length < 2 ||
            !e.chartY
        ) {
            return;
        }

        const currentData = data[e.activeTooltipIndex];
        if (!currentData) {
            return;
        }

        const participatedValue = currentData.participated;
        const didNotParticipateValue = currentData.didNotParticipate;

        const mouseY = e.chartY;
        const chartHeight = e.chartHeight ?? 300;
        const chartTop = e.chartY - mouseY + (e.offset?.top ?? chartMargins.top);
        const yAxisDomain: [number, number] = e.viewBox?.height ? [e.viewBox.y, e.viewBox.y + e.viewBox.height] : [0, 250];
        const yDomainRange = yAxisDomain[1] - yAxisDomain[0] || 250;
        const pixelsPerUnit = chartHeight / yDomainRange;

        const participatedY = chartTop + chartHeight - ((participatedValue - yAxisDomain[0]) * pixelsPerUnit);
        const didNotParticipateY = chartTop + chartHeight - ((didNotParticipateValue - yAxisDomain[0]) * pixelsPerUnit);

        const distToParticipated = Math.abs(mouseY - participatedY);
        const distToDidNotParticipate = Math.abs(mouseY - didNotParticipateY);

        let hoveredLine: "participated" | "didNotParticipate";
        let value: number;

        if (distToParticipated <= distToDidNotParticipate) {
            hoveredLine = "participated";
            value = participatedValue;
        } else {
            hoveredLine = "didNotParticipate";
            value = didNotParticipateValue;
        }

        if (
            !persistedHoverData ||
            persistedHoverData.lesson !== currentData.lesson ||
            persistedHoverData.line !== hoveredLine
        ) {
            setPersistedHoverData({
                lesson: currentData.lesson,
                line: hoveredLine,
                value: value,
                cx: null, // Let renderActiveDot handle precise coords
                cy: null,
            });
        }
    };

    const handleMouseLeave = () => {
        setPersistedHoverData(null);
    };

    const renderActiveDot = (props: any) => {
        const { cx, cy, payload, dataKey } = props;
        const lineType = dataKey as "participated" | "didNotParticipate";

        if (
            persistedHoverData &&
            persistedHoverData.line === lineType &&
            persistedHoverData.lesson === payload.lesson
        ) {
            const activeColor = persistedHoverData.line === 'participated' ? CHART_GREEN : CHART_RED;
            const dotStrokeColor = persistedHoverData.line === 'participated' ? CHART_GREEN : CHART_RED;

            if (persistedHoverData.cx === null || persistedHoverData.cy === null || persistedHoverData.cx !== cx || persistedHoverData.cy !== cy) {
                queueMicrotask(() => {
                    setPersistedHoverData(prev => (prev?.lesson === payload.lesson && prev?.line === lineType ? { ...prev, cx, cy } : prev));
                });
            }

            return (
                <g>
                    <Dot cx={cx} cy={cy} r={6} fill={"white"} stroke={dotStrokeColor} />
                    <Dot cx={cx} cy={cy} r={4} fill={activeColor} stroke="none" />
                </g>
            );
        }

        return <g />;
    };

    return (
        <div className="h-[400px] w-full">
            {/* Legend */}
            <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2 bg-gray-100 py-1.5 px-3 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm">Participated</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 py-1.5 px-3 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">Did not participate</span>
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={chartMargins}
                    onMouseMove={handleChartHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={true} />
                    <XAxis dataKey="lesson" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        domain={[0, 250]}
                        ticks={[0, 20, 60, 100, 150, 200, 250]}
                    />
                    <Tooltip content={() => null} cursor={false} isAnimationActive={false} />
                    <Line
                        type="monotone"
                        dataKey="participated"
                        stroke={CHART_GREEN}
                        strokeWidth={2}
                        dot={false}
                        activeDot={(props: any) => renderActiveDot(props)}
                        name="participated"
                    />
                    <Line
                        type="monotone"
                        dataKey="didNotParticipate"
                        stroke={CHART_RED}
                        strokeWidth={2}
                        dot={false}
                        activeDot={(props: any) => renderActiveDot(props)}
                        name="didNotParticipate"
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Tooltip based on persisted hover data */}
            {persistedHoverData?.cx != null && persistedHoverData?.cy != null && (
                <div
                    className="absolute"
                    style={{
                        left: `${persistedHoverData.cx + chartMargins.left + 24}px`,
                        top: `${persistedHoverData.cy + chartMargins.top - 28}px`,
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                        zIndex: 1000
                    }}
                >
                    <CustomTooltip data={persistedHoverData} />
                </div>
            )}
        </div>
    );
} 