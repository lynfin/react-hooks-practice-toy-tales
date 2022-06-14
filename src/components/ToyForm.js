import React, { useState } from "react";

function ToyForm() {
  const blankToy = {
    name: "",
    image: "",
    likes: 0,
  };
  const [newToy, setNewToy] = useState(blankToy);
  const { newName, newImage } = newToy;

  function handleNewToy(e) {
    const value = e.value;
    const name = e.name;

    setNewToy({ [name]: value });
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewToy}
          value={newName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewToy}
          value={newImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
