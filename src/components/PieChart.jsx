import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
};

function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 p-4">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Sessions By Channel</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center">
            <Doughnut data={DoughnutData} />
            <div className="text-4xl font-bold text-blue-600">75%</div>
            <div>Score</div>
          </div>
          <ul className="mt-4 md:mt-0 md:ml-4">
            <li className="mb-2">
              Firewalls(3): <span className="font-bold">4(100%)</span>
            </li>
            <li className="mb-2">
              Ports(12): <span className="font-bold">12(100%)</span>
            </li>
            <li className="mb-2">
              Servers(233): <span className="font-bold">2(100%)</span>
            </li>
            <li className="mb-2">
              Firewalls(3): <span className="font-bold">7(100%)</span>
            </li>
            <li className="mb-2">
              Firewalls(3): <span className="font-bold">6(70%)</span>
            </li>
          </ul>
        </div>
      </div>
  
    </div>
  );
}

export default Dashboard;
