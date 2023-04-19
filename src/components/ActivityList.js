import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function ActivityList({ localData }) {
  localData = JSON.parse(localStorage.getItem("Activity"));

  console.log(localData);
    return (
      <div className="flexthis">
        {localData.map((singleAct) => (
          <Draggable
            key={singleAct.id}
            axis="both"
            defaultPosition={{ x: 0, y: 0 }}
          >
            <div>
              <p> The draggable element</p>
              <p>{singleAct.title}</p>
              <p>{singleAct.time}</p>
            </div>
          </Draggable>
        ))}
      </div>
    );
}
