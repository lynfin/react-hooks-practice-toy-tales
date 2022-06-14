import React, { useState } from "react";

function ToyForm() {
  const blankToy = {
    name: "",
    image: "",
    likes: 0,
  };
  const [newToy, setNewToy] = useState(blankToy);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    // this does not seem to work, but is shown in https://reactjs.org/docs/forms.html
    // setNewToy({ [name]: value });
    setNewToy((prevToy) => ({ ...prevToy, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("newToy on submit:", newToy);
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((createdToy) => console.log("Creating new toy", createdToy));
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={newToy.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={newToy.image}
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
