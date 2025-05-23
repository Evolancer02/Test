export type Board = number[][];

// Hardcoded 4x4 sudoku (0 = empty)
export const sudoku: Board = [
  [1, 0, 0, 4],
  [0, 0, 1, 0],
  [0, 3, 0, 0],
  [2, 0, 0, 3],
];

// Solution for validation
export const solution: Board = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [2, 1, 4, 3],
];

// Check if board matches solution
export function isSolved(board: Board): boolean {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] !== solution[r][c]) return false;
    }
  }
  return true;
}