import TimestampService from './timestamp.service';

describe('Timestamp Service', () => {
  it('should return the correct value when an integer string is given', function () {
    const result = TimestampService.getTimestamp('43533');
    expect(result).toStrictEqual({ unix: 43533, utc: 'Thu, 01 Jan 1970 00:00:43 GMT' });
  });

  it('should return the correct value when an date string', function () {
    const result = TimestampService.getTimestamp('2021-11-12');
    expect(result).toStrictEqual({ unix: 1636675200000, utc: 'Fri, 12 Nov 2021 00:00:00 GMT' });
  });

  it('should throws an exception when the date given is not correct', function () {
    expect(() => TimestampService.getTimestamp('2021-11-12d')).toThrow('Invalid Date');
  });
});
