class Mileage {
  constructor (history, date) {
    this.history = history
    this.averageMileage = 0
    this.today = date || new Date()
  }

  calculateAnnualAverageMileage () {
    let years = this.history.length
    let totalChange = 0

    for (let i = 0; i < this.history.length - 1; i++) {
      if (this.history[i].date === this.history[i + 1].date) {
        years -= 1
      }
    }

    totalChange = this.history[0].data.mileage - this.history[this.history.length - 1].data.mileage
    this.averageMileage = totalChange / years
    return this.averageMileage
  };

  currentMileage () {
    let mileagePerDay = 0
    let daysDifference = 0
    let totalMileage = 0
    let formattedDate = this.formatDate(this.history[0].date)
    let lastMOTDate = new Date(formattedDate)

    this.calculateAnnualAverageMileage()
    mileagePerDay = this.averageMileage / 365

    daysDifference = (this.today - lastMOTDate) / (1000 * 60 * 60 * 24)
    totalMileage = this.history[0].data.mileage + (daysDifference * mileagePerDay)
    return totalMileage
  }

  formatDate (date) {
    let newDates = []
    let array = []
    let dateArray = []

    array = date.split('T')
    dateArray = array[0].split('-')

    for (let i = 0; i < dateArray.length; i++) {
      newDates.push(parseInt(dateArray[i]))
    }

    return newDates
  }
};
