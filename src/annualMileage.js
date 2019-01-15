let calculateMileage = (history) => {
  let years = history.length;
  let averageMileage = 0;
  let totalChange = 0;

  totalChange = history[0].data.mileage - history[history.length-1].data.mileage;
  return averageMileage = totalChange / years
};
