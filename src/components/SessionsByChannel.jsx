const employeeData = [
    { name: "Connor Chandler", amount: "$4909" },
    { name: "Russell Floyd", amount: "$857" },
    { name: "Douglas White", amount: "$612" },
    { name: "Alta Fletcher", amount: "$233" },
    { name: "Marguerite Pearson", amount: "$233" },
    { name: "Leonard Gutierrez", amount: "$35" },
    { name: "Helen Benson", amount: "$43" },
  ];
  
  const SessionsByChannel = () => {
    return (
      <div className="bg-white p-4 shadow rounded w-full lg:w-1/3 h-full">
        <h2 className="text-xl font-bold mb-4">Sessions By Channel</h2>
        <div>
          <h3 className="font-bold">Employee Name This Month</h3>
          <ul className="space-y-2 mt-2">
            {employeeData.map((employee, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-blue-600 cursor-pointer hover:underline">{employee.name}</span>
                <span className="font-bold">{employee.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default SessionsByChannel;
  