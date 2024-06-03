import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CardTitle = () => {
  const lineOptions = {
    theme: "light2",

    height: "250",

    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "area",
        name: "Error",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "₹#,##0.##",
        dataPoints: [
          { x: new Date("2017-01-01"), y: 60 },
          { x: new Date("2017-02-01"), y: 65 },
          { x: new Date("2017-03-01"), y: 70 },
          { x: new Date("2017-04-01"), y: 75 },
          { x: new Date("2017-05-01"), y: 80 },
          { x: new Date("2017-06-01"), y: 85 },
          { x: new Date("2017-07-01"), y: 90 },
          { x: new Date("2017-08-01"), y: 85 },
          { x: new Date("2017-09-01"), y: 80 },
          { x: new Date("2017-10-01"), y: 75 },
          { x: new Date("2017-11-01"), y: 70 },
          { x: new Date("2017-12-01"), y: 65 },
        ],
      },
      {
        type: "area",
        name: "Critical",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "₹#,##0.##",
        dataPoints: [
          { x: new Date("2017-01-01"), y: 70 },
          { x: new Date("2017-02-01"), y: 75 },
          { x: new Date("2017-03-01"), y: 80 },
          { x: new Date("2017-04-01"), y: 85 },
          { x: new Date("2017-05-01"), y: 90 },
          { x: new Date("2017-06-01"), y: 95 },
          { x: new Date("2017-07-01"), y: 90 },
          { x: new Date("2017-08-01"), y: 85 },
          { x: new Date("2017-09-01"), y: 80 },
          { x: new Date("2017-10-01"), y: 75 },
          { x: new Date("2017-11-01"), y: 70 },
          { x: new Date("2017-12-01"), y: 65 },
        ],
      },
      {
        type: "area",
        name: "Warning",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "₹#,##0.##",
        dataPoints: [
          { x: new Date("2017-01-01"), y: 80 },
          { x: new Date("2017-02-01"), y: 85 },
          { x: new Date("2017-03-01"), y: 90 },
          { x: new Date("2017-04-01"), y: 95 },
          { x: new Date("2017-05-01"), y: 100 },
          { x: new Date("2017-06-01"), y: 95 },
          { x: new Date("2017-07-01"), y: 90 },
          { x: new Date("2017-08-01"), y: 85 },
          { x: new Date("2017-09-01"), y: 80 },
          { x: new Date("2017-10-01"), y: 75 },
          { x: new Date("2017-11-01"), y: 70 },
          { x: new Date("2017-12-01"), y: 65 },
        ],
      },
    ],
  };
  return (
    <div className="w-3/12  px-4 mb-4">
      <div className="bg-white p-4 shadow h-full rounded">
        <h2 className="text-xl font-bold mb-5">Events</h2>
        <div
          id="1"
          className="h-32 flex justify-center
         items-center bg-gray-200"
        >
          <CanvasJSChart options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
