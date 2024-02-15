import React from "react";

function Table({ wallet, plates = [] }) {
  // pass down the eaten sushi as an array "plates" prop to make the plates array === eaten sushi, thus giving me plates every time I click a sushi and turning its eaten status to true.
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
