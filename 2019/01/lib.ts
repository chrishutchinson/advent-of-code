import path from "path";
import fs from "fs";
import { promisify } from "util";

export const loadMasses = async (): Promise<number[]> => {
  const buffer = await promisify(fs.readFile)(
    path.resolve(__dirname, "input.txt")
  );

  return buffer
    .toString()
    .split("\n")
    .filter(s => Number(s) > 0)
    .map(s => Number(s));
};

const getRequiredFuel = (mass: number): number => Math.floor(mass / 3) - 2;

export const calculateFuelRequirements = (
  mass: number,
  baseFuelRequirement: number = 0
): number => {
  const requiredFuel = getRequiredFuel(mass);

  if (requiredFuel <= 0) return baseFuelRequirement;

  return calculateFuelRequirements(
    requiredFuel,
    baseFuelRequirement + requiredFuel
  );
};

export const sumMasses = (masses: number[]): number => {
  return masses.reduce((total, m) => m + total, 0);
};
