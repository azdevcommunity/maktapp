import { useState } from "react"
import { Check } from "lucide-react"

export default function AttendanceTable() {
  const [checkedRows, setCheckedRows] = useState(Array(30).fill(true))

  const toggleRow = (index: number) => {
    const newCheckedRows = [...checkedRows]
    newCheckedRows[index] = !newCheckedRows[index]
    setCheckedRows(newCheckedRows)
  }

  const daysHeaders = Array.from({ length: 15 }, (_, i) => `${i + 1}Dərs`)

  return (
    <div className="w-full rounded-lg shadow">
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-track-transparent  rounded-t-lg">
        <table className="w-full lg:min-w-[800px]">
          <thead className="w-full rounded-lg">
            <tr className="text-left bg-gray-100">
              <th className="sticky left-0 z-10 bg-gray-100 p-2 w-10 rounded-tl-xl rounded-bl-xl py-3.5">
                <div className="w-5 h-5 border border-gray-700 rounded flex items-center justify-center">
                  <Check size={15} className="text-gray-700" />
                </div>
              </th>
              <th className="left-[40px] z-10 bg-gray-100 p-2 py-3.5 font-normal lg:min-w-[80px]">Class</th>
              <th className="p-2 py-3.5 font-normal lg:min-w-[100px]">Attendance</th>
              {daysHeaders.map((header, index) => (
                <th key={index} className={`p-2 py-3 font-normal whitespace-nowrap lg:min-w-[70px] ${index === 14 ? 'rounded-tr-xl rounded-br-xl' : ''}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }).map((_, rowIndex) => (
              <tr key={rowIndex} className={`border-gray-200 ${rowIndex !== 0 ? 'border-t' : ''} border-b`}>
                <td className="sticky left-0 z-10 bg-white p-2 py-4">
                  <div
                    className="w-5 h-5 border border-gray-700 rounded flex items-center justify-center cursor-pointer"
                    onClick={() => toggleRow(rowIndex)}
                  >
                    {checkedRows[rowIndex] && <Check size={14} className="text-gray-700" />}
                  </div>
                </td>
                <td className="left-[40px] z-10 bg-white p-2">0 A</td>
                {/* Attendance column + 15 Dors columns */}
                {Array.from({ length: 16 }).map((_, colIndex) => (
                  <td key={colIndex} className="p-2 space-x-0.5">
                    <span className="text-green">256</span>
                    <span className="text-gray-700">/</span>
                    <span className="text-error-500">6</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 px-2 text-xs text-gray-500 md:hidden">
        Swipe horizontally to view all data
      </div>
    </div>
  )
}
