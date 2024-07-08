var options = {
  series: [44, 55, 41],
  labels: ["BTC", "TRON", "TRON"],
  colors: ["#B5E4CA", "#2A85FF", "#CABDFF"],
  legend: {
    position: "bottom",
    fontSize: "12px",
    fontWeight: 700,
    fontFamily: "Inter",
    itemMargin: {
      horizontal: 16,
      vertical: 0,
    },
    markers: {
      width: 16,
      height: 16,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 4,
      customHTML: undefined,
      onClick: undefined,
      offsetX: -6,
      offsetY: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      size: 200,
      donut: {
        size: "80%",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '10px',
            fontFamily: 'Inter',
            fontWeight: 500,
            color: '#000',
            offsetY: -5,
            formatter: function (val) {
              return val
            }
          },
          value: {
            show: true,
            fontSize: '10px',
            fontFamily: 'Inter',
            fontWeight: 600,
            color: '#000',
            offsetY: 0,
            formatter: function (val) {
              return val
            }
          },
        }
      },
    },
  },
};

var chart_1 = new ApexCharts(document.querySelector("#chart-1"), options);
chart_1.render();

var chart_2 = new ApexCharts(document.querySelector("#chart-2"), options);
chart_2.render();
