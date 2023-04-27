import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function ActivityList({ localData }) {
  localData = JSON.parse(localStorage.getItem("Activity"));

  console.log(localData);

  return (
    <div className="flexThis">
      {localData.map((singleAct) => (
        <div key={singleAct.key}>
          <Draggable axis="both" defaultPosition={{ x: 0, y: 0 }}>
            <div className="draggableActivity">
              <div className="cardHeaderFlex">
                <li>{singleAct.title}</li>
                <li>{singleAct.time}</li>
              </div>
              <img className="picFix"
                src={singleAct.image}
              ></img>
              <li>{singleAct.breakTime}</li>
            </div>
          </Draggable>
        </div>
      ))}
    </div>
  );
}
