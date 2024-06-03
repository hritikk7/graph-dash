import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CardTitle = () => {
  const cardOptions = {
    animationEnabled: true,
    exportEnabled: true,
    height: "200",
    width: "250",
    toolTip: {
      shared: true,
      reversed: true,
    },

    data: [
      {
        type: "stackedColumn",
        name: "General",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 12 },
          { label: "Mar", y: 14 },
          { label: "Apr", y: 13 },
          { label: "May", y: 13 },
          { label: "Jun", y: 13 },
          { label: "Jul", y: 14 },
          { label: "Aug", y: 14 },
          { label: "Sept", y: 13 },
          { label: "Oct", y: 14 },
          { label: "Nov", y: 14 },
          { label: "Dec", y: 14 },
        ],
      },
      {
        type: "stackedColumn",
        name: "Marketing",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 16 },
          { label: "May", y: 17 },
          { label: "Jun", y: 17 },
          { label: "Jul", y: 18 },
          { label: "Aug", y: 18 },
          { label: "Sept", y: 17 },
          { label: "Oct", y: 18 },
          { label: "Nov", y: 18 },
          { label: "Dec", y: 18 },
        ],
      },
      {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 15 },
          { label: "May", y: 15 },
          { label: "Jun", y: 15 },
          { label: "Jul", y: 16 },
          { label: "Aug", y: 17 },
          { label: "Sept", y: 17 },
          { label: "Oct", y: 18 },
          { label: "Nov", y: 19 },
          { label: "Dec", y: 20 },
        ],
      },
      {
        type: "stackedColumn",
        name: "IT",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 8 },
          { label: "Mar", y: 6 },
          { label: "Apr", y: 6 },
          { label: "May", y: 5 },
          { label: "Jun", y: 5 },
          { label: "Jul", y: 6 },
          { label: "Aug", y: 3 },
          { label: "Sept", y: 9 },
          { label: "Oct", y: 5 },
          { label: "Nov", y: 8 },
          { label: "Dec", y: 2 },
        ],
      },
    ],
  };
  return (
    <div className="bg-white p-4 shadow w-1/3 rounded">
      <h2 className="text-xl font-bold mb-4">Card Title</h2>
      <div className="mb-2">
        Total Earning: <span className="font-bold">287,493$</span>
        <div className="text-sm text-green-500">1.4% Since Last Month</div>
      </div>
      <div>
        Total Earning: <span className="font-bold">87,493$</span>
        <div className="text-sm text-green-500">5.43% Since Last Month</div>
      </div>
      <CanvasJSChart options={cardOptions} />
    </div>
  );
};

export default CardTitle;
