import { useState } from "react";
import { sudoku, isSolved, Board } from "./sudoku";

const deepCopy = (b: Board): Board => b.map(row => [...row]);

export default function App() {
  // State for the board
  const [board, setBoard] = useState<Board>(deepCopy(sudoku));
  const [message, setMessage] = useState<string>("");

  // Numbers are between 1 and 4
  // The user can only change the empty cells
  const handleChange = (row: number, col: number, value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1 || num > 4) return;
    const newBoard = deepCopy(board);
    newBoard[row][col] = num;
    setBoard(newBoard);
  };

  // Check solution
  const check = () => {
    setMessage(isSolved(board) ? "Correct!" : "Try again!");
  };

  // I received some help from AI for the UI. The numbers and the table weren't aligned. 
  // It's a simple table with input fields for empty cells and a 
  // button to check the solution.
  return (
  <div
    style={{
      fontFamily: "sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#fafafa",
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: 24 }}>4x4 Sudoku</h2>
    <table style={{ borderCollapse: "collapse", marginBottom: 24 }}>
      <tbody>
        {board.map((row, r) => (
          <tr key={r}>
            {row.map((cell, c) => (
              <td
                key={c}
                style={{
                  border: "1px solid #333",
                  width: 40,
                  height: 40,
                  textAlign: "center",
                }}
              >
                {sudoku[r][c] !== 0 ? (
                  <strong>{cell}</strong>
                ) : (
                  <input
                    type="number"
                    min={1}
                    max={4}
                    value={cell === 0 ? "" : cell}
                    onChange={e => handleChange(r, c, e.target.value)}
                    style={{ width: 32, textAlign: "center" }}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={check}
      style={{
        marginBottom: 16,
        padding: "8px 16px",
        fontSize: "1rem",
        cursor: "pointer",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Check Solution
    </button>
    <div style={{ marginTop: 8, textAlign: "center" }}>{message}</div>
  </div>
);
}