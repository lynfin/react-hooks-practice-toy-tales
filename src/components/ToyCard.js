import React from "react";

function ToyCard({ toy, onRemoveToy, onUpdateToy }) {
  const { name, image, likes, id } = toy;
  const handleClick = (e) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => onRemoveToy(id));
  };

  const handleMoreLikes = (e) => {
    console.log("more likes for", name);
    const newLikes = likes + 1;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((r) => r.json())
      .then((patchedToy) => onUpdateToy(patchedToy));
  };
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleMoreLikes} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
