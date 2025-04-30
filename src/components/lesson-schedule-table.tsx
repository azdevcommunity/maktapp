import { useEffect, useState } from "react"
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import CameraIcon from "@/components/icons/CameraIcon";
import CheckIcon from "@/components/icons/CheckIcon";

interface Teacher {
    name: string;
}

interface LessonData {
    class: string;
    entryTime?: string;
    discipline: string;
    teacher: Teacher;
    attendance?: number;
    hasLessonPlan?: boolean;
    hasOnlineLesson?: boolean;
    hasOnlineResources?: boolean;
    isSpecial?: boolean;
}

interface LessonBlock {
    lessonNumber: number;
    timeSlot: string;
    color?: string;
    data: LessonData[];
}

const COLORS = ['warning', 'gray', 'blue'];

export default function LessonScheduleTable() {
    const [lessonScheduleData, setLessonScheduleData] = useState<LessonBlock[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        import('./lesson-schedule-api.json')
            .then((data) => {
                const processedData: LessonBlock[] = [];

                data.lessonSchedule.forEach((block: LessonBlock, index: number) => {
                    const colorIndex = index % COLORS.length;
                    const assignedColor = COLORS[colorIndex];

                    processedData.push({
                        ...block,
                        color: assignedColor
                    });
                });

                setLessonScheduleData(processedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load lesson schedule data:", error);
                setLoading(false);
            });
    }, []);

    const getBackgroundColor = (baseColor: string, isSpecial: boolean = false, variant: '50' | '100' | '200' = '50') => {
        if (isSpecial) return variant === '50' ? '#FEE4E2' : '#FEE4E2';

        switch (baseColor) {
            case 'warning': return variant === '50' ? '#FFF6DC' : variant === '100' ? '#FEF0C7' : '#FEDF89';
            case 'gray': return variant === '50' ? '#F9FAFB' : variant === '100' ? '#F3F4F6' : '#E7E8EA';
            case 'blue': return variant === '50' ? '#E1F1FF' : variant === '100' ? '#B9DAFF' : '#93C5FF';
            default: return variant === '50' ? '#E1F1FF' : variant === '100' ? '#B9DAFF' : '#93C5FF';
        }
    };

    const getBorderColorClass = (baseColor: string) => {

        switch (baseColor) {
            case 'warning': return "border-warning-200";
            case 'gray': return "border-gray-200";
            case 'blue': return "border-blue-200";
            default: return "border-blue-200";
        }
    };

    const getHeaderCellClassName = (baseColor: string) => {
        const borderClass = getBorderColorClass(baseColor);
        return `p-2 text-sm border ${borderClass}`;
    };

    const getCellClassName = (baseColor: string) => {
        const borderClass = getBorderColorClass(baseColor);

        return `p-2 text-sm border-y-[0.5px] ${borderClass}`;
    };

    if (loading) {
        return <div className="p-4 text-center">Loading lesson schedule...</div>;
    }

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
                <thead className="bg-success-100">
                    <tr>
                        <th className="py-3 text-center text-sm font-medium w-24 h-12 rounded-tl-lg">
                            <div>Lesson</div>
                            <div>Time</div>
                        </th>
                        <th className="py-3 text-start text-sm font-medium w-36 h-12 p-2">
                            <div>Class/</div>
                            <div>Special course</div>
                        </th>
                        <th className="py-3 text-start text-sm font-medium w-36 h-12 p-2">
                            <div>Entry</div>
                            <div>time</div>
                        </th>
                        <th className="py-3 text-start text-sm font-medium w-36 h-12 p-2">
                            <div>Discipline/</div>
                            <div>Teachers</div>
                        </th>
                        <th className="py-3 text-start text-sm font-medium w-36 h-12 p-2">Attendance</th>
                        <th className="py-3 text-start text-sm font-medium w-28 h-12 p-2 pl-9">
                            <div>Lesson</div>
                            <div>plan</div>
                        </th>
                        <th className="py-3 text-start text-sm font-medium w-36 h-12 p-2 rounded-tr-lg">
                            <div>Online</div>
                            <div>lesson</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lessonScheduleData.map((lessonBlock, blockIndex) => (
                        <>
                            {lessonBlock.data.map((lesson, lessonIndex) => (
                                <tr key={`lesson-${blockIndex}-${lessonIndex}`}>
                                    {lessonIndex === 0 && (
                                        <td
                                            rowSpan={lessonBlock.data.length}
                                            className={`${getHeaderCellClassName(lessonBlock.color || 'blue')} text-center`}
                                            style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', false, '50') }}
                                        >
                                            <div className="font-medium">{lessonBlock.lessonNumber} Lesson</div>
                                            <div>{lessonBlock.timeSlot}</div>
                                        </td>
                                    )}
                                    <td
                                        className={`${getCellClassName(lessonBlock.color || 'blue')} text-left`}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        {lesson.class}
                                    </td>
                                    <td
                                        className={getCellClassName(lessonBlock.color || 'blue')}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        {lesson.entryTime}
                                    </td>
                                    <td
                                        className={`${getCellClassName(lessonBlock.color || 'blue')} text-left`}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        <div>{lesson.discipline}</div>
                                        <div className="text-gray-500">{lesson.teacher.name}</div>
                                    </td>
                                    <td
                                        className={getCellClassName(lessonBlock.color || 'blue')}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        {lesson.attendance && (
                                            <div className="w-16 rounded-sm bg-success-100 border border-success-500 px-2 py-1 text-center text-xs text-green-800">
                                                {lesson.attendance}%
                                            </div>
                                        )}
                                    </td>
                                    <td
                                        className={`${getCellClassName(lessonBlock.color || 'blue')} text-center`}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        {lesson.hasLessonPlan && (
                                            <div className="flex justify-center">
                                                <CheckIcon className="h-9 w-9 rounded bg-green-500 p-1 text-white" />
                                            </div>
                                        )}
                                    </td>
                                    <td
                                        className={`${getCellClassName(lessonBlock.color || 'blue')} text-center`}
                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, lessonIndex % 2 === 1 ? '100' : '50') }}
                                    >
                                        {lesson.hasOnlineLesson && (
                                            <div className="flex items-center justify-start gap-2">
                                                <CameraIcon className="h-7 w-7 rounded p-1 bg-green text-white" />
                                                {lesson.hasOnlineResources && (
                                                    <HamburgerIcon
                                                        className={`h-7 w-7 rounded p-1`}
                                                        style={{ backgroundColor: getBackgroundColor(lessonBlock.color || 'blue', lesson.isSpecial, '200') }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
