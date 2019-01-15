describe("calculateMileage", function() {

  it("gets the average mileage when given a history with 2 events", function() {
    const history = [{
      event: 'MOT',
      date: '2018-3-10T00:00:00.000Z',
      data: {
        mileage: 69383,
        passed: true
      }
    },
    {
      event: 'MOT',
      date: '2017-3-10T00:00:00.000Z',
      data: {
        mileage: 58385,
        passed: true
      }
    }]
    expect(calculateMileage(history)).toBe(5499)
  });

  it("gets the average mileage when given a history with 3 events", function() {
    const history = [{
      event: 'MOT',
      date: '2018-3-10T00:00:00.000Z',
      data: {
        mileage: 69383,
        passed: true
      }
    },
    {
      event: 'MOT',
      date: '2017-3-10T00:00:00.000Z',
      data: {
        mileage: 58385,
        passed: true
      }
    },
    {
       event: 'MOT',
       date: '2016-4-10T00:00:00.000Z',
       data: {
         mileage: 46275,
         passed: true
       }
     }]
    expect(calculateMileage(history)).toBe(7702.666666666667)
  });
});
