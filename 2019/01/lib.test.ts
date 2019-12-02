import { calculateFuelRequirements, sumMasses } from "./lib";

describe("#calculateFuelRequirements()", () => {
  it("should take the mass, divide by three (rounding down), then subtract two, and return the result", () => {
    expect(calculateFuelRequirements(12)).toEqual(2);
    expect(calculateFuelRequirements(14)).toEqual(2);
    expect(calculateFuelRequirements(1969)).toEqual(966);
    expect(calculateFuelRequirements(100756)).toEqual(50346);
  });
});

describe("#sumMasses()", () => {
  it("should add up all the provided values", () => {
    expect(sumMasses([1, 2, 3, 4])).toEqual(10);
  });
});
