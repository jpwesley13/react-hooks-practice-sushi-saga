import React, {useEffect, useInsertionEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushi, setSushi] = useState([]);
const [wallet, setWallet] = useState(50)


useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    const newSushi = data.map(sushi => {
      return {...sushi, eaten:false };
    });
    setSushi(newSushi);
})
}, [])

function handleEatSushi(eatenSushi) {
  if(wallet >= eatenSushi.price){
  const updatedSushi = sushi.map(food => {
    if(food.id === eatenSushi.id){
    return {...food, eaten:true}
    } else {
      return food
}});

   
  setSushi(updatedSushi)
  setWallet(wallet => wallet - eatenSushi.price)
} else {
  alert("You don't have enough money to purchase this.")
}
}

const eatenSushis = sushi.filter(food => food.eaten) //this is maybe how I get plates to show up on the table?

  return (
    <div className="app">
      <SushiContainer 
      sushi={sushi}
      handleEatSushi={handleEatSushi}/>
      <Table 
      wallet = {wallet}
      plates = {eatenSushis}/>
    </div>
  );
}

export default App;
