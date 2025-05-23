import { isSolved, solution, Board } from "./sudoku";

test("isSolved returns true for a correct solution", () => {
  expect(isSolved(solution)).toBe(true);
});

test("isSolved returns false for an incorrect board", () => {
  const wrong: Board = [
    [1, 2, 3, 4],
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [2, 1, 3, 4], // last row is wrong
  ];
  expect(isSolved(wrong)).toBe(false);
});