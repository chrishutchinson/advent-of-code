import { loadMasses, calculateFuelRequirements, sumMasses } from "./lib";

const getAnswer = async () => {
  const masses = await loadMasses();

  const massRequirements = masses.map(mass => calculateFuelRequirements(mass));

  const total = sumMasses(massRequirements);

  return total;
};

getAnswer().then(console.log);
