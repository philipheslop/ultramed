import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DataVis = ({ userData }) => {
  const [showDataVis, setShowDataVis] = useState(false);

  const pieLabels = ["Active", "Invited", "Invite Expired"];
  const pieData = {
    labels: pieLabels,
    datasets: [
      {
        label: "# of Instances",
        data: [
          userData.filter((user) =>
            user.status.toLowerCase().includes(pieLabels[0].toLowerCase()),
          ).length,
          userData.filter((user) =>
            user.status.toLowerCase().includes(pieLabels[1].toLowerCase()),
          ).length,
          userData.filter((user) =>
            user.status.toLowerCase().includes(pieLabels[2].toLowerCase()),
          ).length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  /*pieData.labels.forEach((label, i) => {
    pieData.datasets[0].data[i] = data.filter((user) =>
      user.status.toLowerCase().includes(label.toLowerCase()),
    ).length;
  });*/
  return (
    <>
      <button
        className="w-full text-xs bg-gray-200 text-black active:bg-blue-500 
font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowDataVis(!showDataVis)}
      >
        {showDataVis ? "Hide Data Visualisation" : "Show Data Visualisation"}
      </button>
      {showDataVis ? <Pie redraw={true} data={pieData} /> : null}
    </>
  );
};
