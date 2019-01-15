class Mileage {
  constructor(history) {
    this.history = history;
    this.averageMileage;
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
    return this.averageMileage = totalChange / years
  };

  currentMileage() {
    let mileagePerDay = 0;
    let daysDifference = 0;
    let totalMileage = 0;
    let today = new Date();
    let lastMOTDate = new Date('2018-03-10T00:00:00.000Z');

    this.calculateMileage();
    mileagePerDay = this.averageMileage / 365;
    daysDifference = (today - lastMOTDate) / (1000 * 60 * 60 * 24);
    totalMileage = this.history[0].data.mileage + (daysDifference * mileagePerDay);
    return totalMileage;
  }
};
