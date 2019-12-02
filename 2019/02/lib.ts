import path from "path";
import fs from "fs";
import { promisify } from "util";

type OpCode = 1 | 2;
type Program = (a: number, b: number) => number;

const getOpcodeProcess = (opcode: OpCode): Program => {
  const process: { [opcode: number]: Program } = {
    1: (a, b) => a + b,
    2: (a, b) => a * b
  };

  return process[opcode];
};

export const loadProgram = async (): Promise<number[]> => {
  const buffer = await promisify(fs.readFile)(
    path.resolve(__dirname, "input.txt")
  );

  return buffer
    .toString()
    .split(",")
    .map(p => Number(p));
};

export const runProgram = (program: number[]): number[] => {
  let isFinished = false;
  let newProgram = [...program];

  newProgram.forEach((p, index) => {
    if (index % 4 !== 0) {
      return;
    }

    if (newProgram[index] === 99) {
      isFinished = true;
    }

    if (isFinished) {
      return;
    }

    const opcodeProcess = getOpcodeProcess(p as OpCode);
    const result = opcodeProcess(
      newProgram[newProgram[index + 1]],
      newProgram[newProgram[index + 2]]
    );
    const destination = newProgram[index + 3];
    newProgram[destination] = result;
  });

  return newProgram;
};
