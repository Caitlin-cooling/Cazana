describe("Mileage", function() {

  describe("calculateMileage", function() {
    let mileage;

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
      mileage = new Mileage(history);
      expect(mileage.calculateMileage()).toBe(5499)
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
      mileage = new Mileage(history);
      expect(mileage.calculateMileage()).toBe(7702.666666666667)
    });

    it("gets the average mileage when given a history with duplicate events", function() {
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
        date: '2017-3-10T00:00:00.000Z',
        data: {
          mileage: 58385,
          passed: true
         }
       }]
      mileage = new Mileage(history);
      expect(mileage.calculateMileage()).toBe(5499)
    });

    it("gets the average mileage when given a test history", function () {
      const history = [
       {
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
       },
       {
         event: 'MOT',
         date: '2016-4-10T00:00:00.000Z',
         data: {
           mileage: 46275,
           passed: false
         }
       },
       {
         event: 'MOT',
         date: '2015-4-10T00:00:00.000Z',
         data: {
           mileage: 37375,
           passed: true
         }
       },
       {
         event: 'MOT',
         date: '2014-4-10T00:00:00.000Z',
         data: {
           mileage: 37375,
           passed: true
         }
       }
      ]
      mileage = new Mileage(history);
      expect(mileage.calculateMileage(history)).toBe(6401.6)
    });
  });
});
