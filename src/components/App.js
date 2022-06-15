import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

//  └ ├ ┌ ─
//
//  App
//   ├ Header [showForm][toys]
//   ├ ToyForm
//   ├ .buttonContainer
//   └ ToyContainer
//         └ ToyCard
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys", {
      headers: {
        "Content-Type": "application-json",
      },
    })
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  const addToy = (newToy) => {
    setToys([...toys, newToy]);
  };

  const handleRemoveToy = (id) => {
    setToys(toys.filter((toy) => toy.id !== id));
  };

  const handleUpdateToy = (updatedToy) => {
    setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)));
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onRemoveToy={handleRemoveToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
