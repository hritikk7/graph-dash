const deviceStats = [
    { label: "Uptime", value: "195 Days, 8 hours" },
    { label: "First Seen", value: "23 Sep 2019, 2.04PM" },
    { label: "Collected Time", value: "23 Sep 2019, 2.04PM" },
    { label: "Memory Space", value: "168.3GB" },
  ];
  
  const DeviceStats = () => {
    return (
      <div className="bg-white p-4 shadow rounded w-full lg:w-1/3 h-full">
        <h2 className="text-xl font-bold mb-4">Device Stats</h2>
        <ul className="mb-4">
          {deviceStats.map((stat, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{stat.label}: </span>
              <span>{stat.value}</span>
            </li>
          ))}
        </ul>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>
    );
  };
  
  export default DeviceStats;