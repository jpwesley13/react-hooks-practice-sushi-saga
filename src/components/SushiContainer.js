import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, handleEatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)

  function handleMoreClick() {
    setSushiIndex(sushiIndex => sushiIndex + 4)
  }


  const sushiToDisplay = sushi
  .slice(sushiIndex, sushiIndex + 4)
  .map(food => (
    <Sushi 
    key={food.id}
    food={food}
    handleEatSushi={handleEatSushi}
    />))

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton 
      clickMore = {handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
