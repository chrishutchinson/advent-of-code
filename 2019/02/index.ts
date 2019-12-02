import { loadProgram, runProgram } from "./lib";

// const partOne = async () => {
//   const program = await loadProgram();

//   program[1] = 12;
//   program[2] = 2;

//   const result = runProgram(program);

//   return result.join(",");
// };

// partOne().then(console.log);

const verbs = new Array(100).fill(null).map((_, index) => index);
const nouns = new Array(100).fill(null).map((_, index) => index);

const partTwo = async () => {
  let hasResult: false | { noun: number; verb: number } = false;

  const program = await loadProgram();

  nouns.forEach(n => {
    verbs.forEach(v => {
      if (hasResult) return;

      const newProgram = [...program];

      newProgram[1] = n;
      newProgram[2] = v;

      const [result] = runProgram(newProgram);

      if (result === 19690720) {
        hasResult = { noun: n, verb: v };
      }
    });
  });

  return hasResult;
};

partTwo().then(console.log);
