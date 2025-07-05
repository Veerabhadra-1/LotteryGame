import { useState, useEffect } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "@mui/material/Button";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const [wins, setWins] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  const isWinning = winCondition(ticket);

  useEffect(() => {
    if (timeLeft <= 0 || wins>=2) {
      setGameOver(true);
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  const buyTicket = () => {
    if (gameOver) return;
    const newTicket = genTicket(n);
    setTicket(newTicket);
    if (winCondition(newTicket)) {
      setWins(wins + 1);//asynchronous
    }
  };

  const restartGame = () => {
    setTicket(genTicket(n));
    setWins(0);
    setTimeLeft(60);
    setGameOver(false);
  };

  return (
    <>
      <h1 style={{color:"black",fontSize:"40px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",fontWeight:"bold"}}>Lottery Game</h1>
      <div className="timer">
        Time Left: {timeLeft} second{(timeLeft !== 1 || timeLeft !== 0 )? "s" : ""}
      </div>
      <br />
      <Ticket ticket={ticket}  isWinning={isWinning} />
      <br />
      <div className="wincount">Number of Wins: {wins}</div>
      <div className="buybutton">
        <Button
          variant="contained"
          color="secondary"
          onClick={buyTicket}
          startIcon={<LocalActivityIcon />}
          disabled={gameOver}
          style={{ boxShadow: "6px 6px 6px black" }}
        >
          Buy New Ticket
        </Button>
      </div>
      <br />
      <br />

      {/* Show result only when game is over */}
      {gameOver && (
        <div className="winbutton" style={{ marginTop: "20px", fontSize: "18px" }}>
          {wins >= 2 ? (
            <span style={{ fontSize: "21px", display: "inline-flex", alignItems: "center" }}>
              Congratulations, you won!&nbsp;
              <EmojiEventsIcon style={{ fontSize: "21px" }} />
            </span>
          ) : (
             <span style={{ fontSize: "21px", display: "inline-flex", alignItems: "center" }}>
              Time is Up Restart!&nbsp;
              <RestartAltIcon style={{ fontSize: "21px" }} />
            </span>
          )}
           <Button variant="contained" color="error" startIcon={ <RestartAltIcon />}onClick={restartGame} style={{marginTop:"60px",boxShadow: "6px 6px 6px black"}}>
            Restart Game
          </Button>
        </div>
       
      )}
    </>
  );
}
