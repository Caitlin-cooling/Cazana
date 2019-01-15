describe("Mileage", function() {

  describe("calculateMileage", function() {
    let mileage;

    it("Gets the average mileage when given a history with 2 events", function() {
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
      expect(mileage.calculateAnnualAverageMileage()).toBe(5499)
    });

    it("Gets the average mileage when given a history with 3 events", function() {
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
      expect(mileage.calculateAnnualAverageMileage()).toBe(7702.666666666667)
    });

    it("Gets the average mileage when given a history with duplicate events", function() {
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
      expect(mileage.calculateAnnualAverageMileage()).toBe(5499)
    });

    it("Gets the average mileage when given a test history", function () {
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
      expect(mileage.calculateAnnualAverageMileage(history)).toBe(6401.6)
    });
  });

  describe("currentMileage", function() {
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

    let mileage;
    let date;

    beforeEach(function(){
      mileage = new Mileage(history);
      date = new Date('2019-01-15T20:28:31.000z');
    });

    it("Calculates the current mileage given a history", function() {
      spyOn(window, 'Date').and.callFake(function() {
        return date;
      });
      expect(mileage.currentMileage()).toBe(69383)
    });
  });
});
