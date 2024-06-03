import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SalesAnalytics = () => {
  const SalesOptions = {
    height: "200",
    width: "300",
    animationEnabled: true,

    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
    },
    data: [
      {
        type: "spline",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 120 },
          { x: new Date(2017, 1, 1), y: 135 },
          { x: new Date(2017, 2, 1), y: 144 },
          { x: new Date(2017, 3, 1), y: 103 },
          { x: new Date(2017, 4, 1), y: 93 },
          { x: new Date(2017, 5, 1), y: 129 },
          { x: new Date(2017, 6, 1), y: 143 },
          { x: new Date(2017, 7, 1), y: 156 },
          { x: new Date(2017, 8, 1), y: 122 },
          { x: new Date(2017, 9, 1), y: 106 },
          { x: new Date(2017, 10, 1), y: 137 },
          { x: new Date(2017, 11, 1), y: 142 },
        ],
      },
      {
        type: "spline",
        name: "Profit",
        axisYType: "secondary",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 19034.5 },
          { x: new Date(2017, 1, 1), y: 20015 },
          { x: new Date(2017, 2, 1), y: 27342 },
          { x: new Date(2017, 3, 1), y: 20088 },
          { x: new Date(2017, 4, 1), y: 20234 },
          { x: new Date(2017, 5, 1), y: 29034 },
          { x: new Date(2017, 6, 1), y: 30487 },
          { x: new Date(2017, 7, 1), y: 32523 },
          { x: new Date(2017, 8, 1), y: 20234 },
          { x: new Date(2017, 9, 1), y: 27234 },
          { x: new Date(2017, 10, 1), y: 33548 },
          { x: new Date(2017, 11, 1), y: 32534 },
        ],
      },
    ],
  };
  return (
    <div className="bg-white p-4 w-1/3 shadow rounded mb-4 mr-2">
      <h2 className="text-xl font-bold mb-4">Sales Analytics</h2>
      <div className="flex flex-col justify-center   ">
        <ul className="flex flex-row w-full justify-between px-5 mb-2">
          <li className="flex flex-col justify-center items-center text-sm">
            Online:{" "}
            <span className="font-bold text-2xl text-pink-600 ">23,342</span>
          </li>
          <li className="flex flex-col  justify-center text-sm">
            Offline:{" "}
            <span className="font-bold text-2xl text-purple-600">13,221</span>
          </li>
          <li className="flex flex-col justify-center text-sm">
            Marketing:{" "}
            <span className="font-bold text-2xl text-yellow-400">1,542</span>
          </li>
        </ul>
        <div className="">
          <CanvasJSChart options={SalesOptions} />
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
