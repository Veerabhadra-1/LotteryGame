import { useState } from 'react'
import './App.css';
import Lottery from "./Lottery.jsx";
import {sum} from "./helper.js"

function App() {
  //  let winCondition=(ticket)=>{
  //   return sum(ticket)===15;
  //  }

  //condition for all numbers of ticket to be same
  let winCondition=(ticket)=>{
    return ticket.every((num)=> num === ticket[0]);
   }

  return (
    <>
      {/* <Ticket ticket={[0,1,2]}/> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App;

