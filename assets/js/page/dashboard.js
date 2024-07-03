var options = {
  series: [44, 55, 41],
  labels: ["BTC", "TRON", "TRON"],
  colors: ['#B5E4CA', '#2A85FF', '#CABDFF'],
  legend: {
    position: "bottom",
    fontSize: '12px',
    fontWeight: 700,
    itemMargin: {
      horizontal: 16,
      vertical: 0
  },
    markers: {
      width: 16,
      height: 16,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 4,
      customHTML: undefined,
      onClick: undefined,
      offsetX: -6,
      offsetY: 0
  },
  },
  dataLabels: {
    enabled: false,

  },
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart_1 = new ApexCharts(document.querySelector("#chart-1"), options);
chart_1.render();

var chart_2 = new ApexCharts(document.querySelector("#chart-2"), options);
chart_2.render();
