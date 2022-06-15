import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onRemoveToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          toy={toy}
          key={toy.id}
          onRemoveToy={onRemoveToy}
          onUpdateToy={onUpdateToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
