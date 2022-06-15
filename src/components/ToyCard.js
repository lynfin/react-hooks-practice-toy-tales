import React from "react";

function ToyCard({ toy, onRemoveToy }) {
  const { name, image, likes, id } = toy;
  const handleClick = (e) => {
    console.log("Delete requested");
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => console.log("Deleted toy", id));
  };
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
