import TicketNum from "./TicketNum.jsx";
import "./Ticket.css";

export default function Ticket({ticket,isWinning}){
  return (
    <div className="Ticket">
        <p style={{fontSize:"16px",fontFamily:"cursive",color:"darkred"}}>Ticket</p>
        {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx} isWinning={isWinning}/>
        ))}
    </div>
         )
                                        } 
