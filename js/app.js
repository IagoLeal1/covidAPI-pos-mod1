class App {
  constructor(){
    this.initListener();
    this.fetchInitialData();
  }

  initListener(){
    document.getElementById('search-form').addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event){
    event.preventDefault();
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;

    this.fetchData(country, date);
  }

  fetchInitialData(){
    const data = Date.now;
    this.fetchData('usa', '2022-01-10');
  }

  fetchData(country, date){
    window.dataFetcher.fetchData(country, date);
  }

}

new App();