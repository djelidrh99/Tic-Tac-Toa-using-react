import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import { useState ,useEffect } from "react";

export default function TicTacToa() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [stateWinner,setStateWinner]=useState(`Tic Tac Toa Game`)

  function handelClick(value, indx) {
    if (value === null) {
      if (isNext) {
        const cellList = board.map((cell, index) => {
          if (index === indx) {
            return "X";
          } else {
            return cell;
          }
        });
        setIsNext(false);
        setBoard(cellList);
      } else {
        const cellList = board.map((cell, index) => {
          if (index === indx) {
            return "O";
          } else {
            return cell;
          }
        });
        setIsNext(true);
        setBoard(cellList);
      }
    } else {
      console.log("not empty");
    }
  }

  function winner() {
    const winnerCombi = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let [a,b,c] of winnerCombi) {
        if(board[a]===board[b]&&board[a]===board[c] && board[a]!==null) {
            console.log("winner")
            setStateWinner(`${board[a]} is the winner`)
            return
        }

    }
    if (!board.includes(null)) {
        setStateWinner("It's a draw!");
    }
    
  }

  useEffect(()=>{
    winner()
  },[board])

  function restar(){
    setIsNext(true)
    setBoard(Array(9).fill(null))
    setStateWinner("Tic Tac Toa Game")
  }
 

  const boardList = board.map((cell, index) => {
    return (
      <Grid
        sx={{
          color: cell === "X" ? "rgb(190 24 93)" : "rgb(147 51 234)",
          fontSize: "60px",
          fontWeight: "bold",
          backgroundColor: "rgb(51 65 85)",
          aspectRatio: "1 / 1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={4}
        key={index}
        
      >
        <div
          
          className="w-full h-full flex justify-center items-center"
          onClick={() => {
            handelClick(cell, index);
          }}
          
        >
          {cell}
        </div>
      </Grid>
    );
  });
  return (
    <div className="">
      <Container className=" text-center" maxWidth="xs">
        <Typography className=" text-white" variant="h3" gutterBottom>
          {stateWinner}
        </Typography>
        <Grid sx={{ marginTop: "20px" }} container spacing={1}>
          {boardList}
        </Grid>
        <Button
          sx={{ backgroundColor: "rgb(51 65 85)", marginTop: "20px" }}
          variant="contained"
          onClick={restar}
        >
          Restar <ReplayOutlinedIcon className="text-emerald-600" />
        </Button>
      </Container>
    </div>
  );
}
