class Mileage {
  constructor(history) {
    this.history = history;
  }

  calculateMileage() {
    let years = this.history.length;
    let averageMileage = 0;
    let totalChange = 0;

    for(let i = 0; i < this.history.length-1; i++){
      if(this.history[i].date === this.history[i + 1].date) {
        years -= 1;
      }
    }

    totalChange = this.history[0].data.mileage - this.history[this.history.length-1].data.mileage;
    return averageMileage = totalChange / years
  };
};
