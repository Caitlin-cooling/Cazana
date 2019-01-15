let calculateMileage = (history) => {
  let years = history.length;
  let averageMileage = 0;
  let totalChange = 0;

  for(let i = 0; i < history.length-1; i++){
    if(history[i].date === history[i + 1].date) {
      years -= 1;
    }
  }

  totalChange = history[0].data.mileage - history[history.length-1].data.mileage;
  return averageMileage = totalChange / years
};
