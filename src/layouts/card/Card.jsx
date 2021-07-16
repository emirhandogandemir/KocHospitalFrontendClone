import React from "react";
import "./card.scss";
import { GoPlus } from "react-icons/go";
export default function Card({ img, content, name }) {
  return (
    <div className="body">
      <div className="card">
        <img className="img" src={img} alt="props"></img>
        <div className="card__content">
          <p>{name}</p>
          <p>{content}</p>

          <button className="button">
            <GoPlus />
            Detayları gör
          </button>
        </div>
      </div>
    </div>
  );
}
