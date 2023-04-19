import React from "react";
import { useState } from "react";
import uuid from "../utils/helpers";

if (localStorage.getItem("Activity") == null) {
  localStorage.setItem("Activity", "[]");
}

function Header() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setTitle or setTime based on what field the user is typing in
    // we can handle the extra stuff with and expanded if statement probably
    return name === "title" ? setTitle(value) : setTime(value);
  };
  // the object we store the teachers input in
  const newActivity = {
    title: title,
    time: time,
    id: uuid(),
  };

  //when "Add Activity" button is clicked it will grab the old arrat of data, 
  //push the new object into the array and then save it to local storage

  const handleClick = (e) => {
    e.preventDefault();
    console.log(title, time);
    let oldData = JSON.parse(localStorage.getItem("Activity"));
    console.log(oldData);
    oldData.push(newActivity);

    localStorage.setItem("Activity", JSON.stringify(oldData));
    // i know using window.loacation is looked down upon in REACT but im having trobule getting useEffect to work with local storage
    window.location.reload()
    setTitle("");
    setTime("");
  };

  return (
    <div>
      <div className="flexThis">
        <div className="draggableActivity">
          <button onClick={handleClick}>Add Activity</button>
          <li className="activityText">
            <input name="title" value={title} onChange={handleInputChange} />
          </li>
          <li className="activityText">
            <input name="time" value={time} onChange={handleInputChange} />
          </li>
        </div>
        <h1>Hello Class!!!!</h1>
        <h2>Heres our Activities for today!</h2>
        <br />
      </div>
    </div>
  );
}

export default Header; // our connection to the rest of the application
