import React from "react";

function Sushi({food, handleEatSushi}) {

  function handleClick() {
    if(!food.eaten) {
      handleEatSushi(food);
    } else {
      alert("This sushi has already been eaten!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {food.eaten ? null : (
          <img
            src={food.img_url}
            alt={food.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {food.name} - ${food.price}
      </h4>
    </div>
  );
}

export default Sushi;
