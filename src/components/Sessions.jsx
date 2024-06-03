import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Sessions = () => {
    const douOptions = {
        animationEnabled: true,
        // title: {
        //   text: "Customer Satisfaction"
        // },
        height: "200",
        width: "200",
        subtitles: [
          {
            text: "Score 75% ",
            verticalAlign: "center",
            fontSize: 14,
            dockInsidePlotArea: true,
          },
        ],
        data: [
          {
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
              { name: "Firewall(3)", y: 100 },
              { name: "Ports(12)", y: 100 },
              { name: "Servers", y: 40 },
              { name: "Firewall(3)", y: 17 },
              { name: "Firewall(3)", y: 7 },
            ],
          },
        ],
      };
    
  return (
    <div className=" w-2/5 px-4 mb-4">
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">
        Sessions By Channel
      </h2>

      <div id="2" className="text-center">
        <CanvasJSChart options={douOptions} />
      </div>
    </div>
  </div>
  );
};

export default Sessions;
