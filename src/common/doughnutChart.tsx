import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data?: number[] | string;
  backgroundColor?: string[] | string;
  label?: string;
  labels?: string[];
}

function DoughnutChart({ data, backgroundColor, label, labels }: Props): JSX.Element {
  const plugins: any = [
    {
      beforeDraw: function (chart: any): void {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        const fontSize = 1.8;
        ctx.font = `bold ${fontSize}em sans-serif`;
        ctx.textBaseline = "top";
        const text = 18,
          textX = Math.round((width - ctx.measureText(text).width) / 2.1),
          textY = height / 2.2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Doughnut
      plugins={plugins}
      
      data={{
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor,
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}

export default DoughnutChart;
