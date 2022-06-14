import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onRemoveToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard toy={toy} key={toy.id} onRemoveToy={onRemoveToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
