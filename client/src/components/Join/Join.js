import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join">
      <div className="join__container">
        <h1 className="join__heading">
          <span className="join__sham">Just</span>
          <span className="join__text">Talk</span>
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="join__input"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Room"
          className="join__input"
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="join__button" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
