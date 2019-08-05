import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { name, slug, price, images } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
      </div>
    </article>
  );
}
