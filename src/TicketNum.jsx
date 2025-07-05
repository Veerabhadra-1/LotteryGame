import "./TicketNum.css";
export default function TicketNum({num,isWinning}){
    return (
    // <span className="TicketNum">{num} </span>
     <span className="TicketNum"
          style={{
            color: isWinning ? "red" : "black",
          }}
        >
          {num}
        </span>
);
                                        }
                                        