class FetchData {
  constructor() {
    this.chart = null;
    window.dataFetcher = this;
  }

  fetchData(isoCountry, date) {
    axios
      .get(
        `https://covid-api.com/api/reports/total?date=${date}&iso=${isoCountry}`
      )
      .then(this.createChart.bind(this))
      .catch((error) => console.error(error));
  }

  createChart(response) {
    const apiData = response.data.data;
    const context = document.getElementById('chart-container');

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart(context, {
      type: 'pie',
      data: {
        labels: ["Mortes", "Confirmados", "Confirmados Descartados"],
        datasets: [{
          data: [apiData.deaths, apiData.confirmed, apiData.confirmed_diff],
          backgroundColor: ["red", "blue", "green"]
        }]
      }
    })
  }
}

new FetchData();
