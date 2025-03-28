
const DashboardOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium mb-2">Students</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium mb-2">Teachers</h3>
          <p className="text-3xl font-bold">56</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium mb-2">Classes</h3>
          <p className="text-3xl font-bold">78</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="border-b pb-3">
            <p className="font-medium">New student registration</p>
            <p className="text-gray-600 text-sm">Today, 10:23 AM</p>
          </li>
          <li className="border-b pb-3">
            <p className="font-medium">Class schedule updated</p>
            <p className="text-gray-600 text-sm">Yesterday, 4:45 PM</p>
          </li>
          <li className="border-b pb-3">
            <p className="font-medium">New teacher joined</p>
            <p className="text-gray-600 text-sm">Yesterday, 11:30 AM</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview; 