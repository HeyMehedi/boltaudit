import Chart from "react-apexcharts";

function ChartRow({ title, value, data }) {
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
      },
    },
    markers: { size: 4 },
    tooltip: { enabled: false },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
  };

  const series = [{ data }];

  return (
    <div className="ba-dashboard__chart">
      <div className="ba-dashboard__chart__content">
        <h4 className="ba-dashboard__chart__title">{title}</h4>
        <div className="ba-dashboard__chart__count">{value}</div>
      </div>
      <div className="ba-dashboard__chart__wrapper">
        <Chart options={options} series={series} type="area" height={80} />
      </div>
    </div>
  );
}

export default ChartRow;
