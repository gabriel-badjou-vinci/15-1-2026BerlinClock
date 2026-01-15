import { BerlinClockClass } from "./berlinClock";

describe('Berlin Clock - Single Minutes Row', () => {
  const clock = new BerlinClockClass();
  it('should return "____" when minutes end with 0 or 5', () => {
    
    const result = clock.convertTimeToClock("00:00:00");
    expect(result.minutes).toBe("____");
    
    const result1 = clock.convertTimeToClock("00:05:00");
    expect(result1.minutes).toBe("____");
  });

  it('should return "Y___" when minutes end with 1 or 6', () => {
    const result = clock.convertTimeToClock("00:01:00");
    expect(result.minutes).toBe("Y___");
    
    const result1 = clock.convertTimeToClock("00:26:00");
    expect(result1.minutes).toBe("Y___");
  });

  it('should return "YY__" when minutes end with 2 or 7', () => {
    const result = clock.convertTimeToClock("00:02:00");
    expect(result.minutes).toBe("YY__");
    
    const result1 = clock.convertTimeToClock("00:27:00");
    expect(result1.minutes).toBe("YY__");
  });

  it('should return "YYY_" when minutes end with 3 or 8', () => {
    const result = clock.convertTimeToClock("00:03:00");
    expect(result.minutes).toBe("YYY_");
    
    const result1 = clock.convertTimeToClock("00:28:00");
    expect(result1.minutes).toBe("YYY_");
  });

  it('should return "YYYY" when minutes end with 4 or 9', () => {
    const result = clock.convertTimeToClock("00:04:00");
    expect(result.minutes).toBe("YYYY");
    
    const result1 = clock.convertTimeToClock("00:59:00");
    expect(result1.minutes).toBe("YYYY");
  });

});