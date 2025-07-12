import { useState } from 'react'
import './App.css';
import Lottery from "./Lottery.jsx";
import {sum} from "./helper.js"

function App() {
  //  let winCondition=(ticket)=>{
  //   return sum(ticket)===15;
  //  }

  //condition for sum of numbers on ticket is 15
  const winCondition = (ticket) => {
  const total = ticket.reduce((sum, num) => sum + num, 0);
  return total === 15;
};

  return (
    <>
      {/* <Ticket ticket={[0,1,2]}/> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App;

