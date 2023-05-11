import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function ActivityList({ localData }) {
  localData = JSON.parse(localStorage.getItem("Activity"));
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();

  // console.log(rePositionAct)
  // console.log("ActivityList.js", localData)
  // const localPosition = "";
  // if (JSON.parse(localStorage.getItem("positions_div")) === "{}") {
  //   localStorage.setItem("positions_div", {});
  // }

  const [positions, setPositions] = useState({});
  // const existingDivPositions = JSON.parse(
  //   localStorage.getItem("positions_div")
  // );

  // useEffect(() => {
  //   if (existingDivPositions) {
  //     localStorage.getItem("positions_div");
  //   }
  // }, [existingDivPositions]);

  function detectCard(e) {
    let deleteOne = e.target.getAttribute("id");
    console.log(deleteOne);
    // arr.map((activity) => {
    //   console.log(activity);
    // });

    // arr.splice(arr.indexOf(1), 1);
    // storage.setItem("data", JSON.stringify(arr));
  }

  // quick placeholder for single delete function
  function deleteActivity(e) {
    confirm("Do you want to delete this Activity?");
    if(confirm) {
      alert("ok")
    } else {
      alert ("false")
    }
  }

  const bigAndSmall = (e) => {
   let selectedCard = e.target.getAttribute("class")
   console.log(selectedCard)
  }

  const handleStop = (e, data) => {
    let dummyPositions = { ...positions };

    // const itemId = e.target.id
    //  let tempId = ("div.draggableActivity.react-draggable-dragged.style")
    //  console.log(itemId)
    // dummyPositions[itemId] = {};

    setXPos((dummyPositions["x"] = data.x));
    setYPos((dummyPositions["y"] = data.y));
    setPositions(dummyPositions);
    // console.log("works")
    console.log(dummyPositions);
    // let deleteOne = e.target.getAttribute('className')
    detectCard(e);

    // console.log(deleteOne)
  };

  //putting positions for cards into local storage
  // useEffect(() => {
  //   localStorage.setItem("positions_div", JSON.stringify(positions));
  // }, [positions]);

  return (
    <div className="flexThisList">
      {localData.map((singleAct) => (
        <div key={singleAct.key} className="flexThis">
          <Draggable
            axis="both"
            defaultPosition={{ x: Number(singleAct.x), y: Number(singleAct.y) }}
            onStop={handleStop}
          >
            <div
              id={singleAct.key}
              key={singleAct.key}
              className="draggableActivity cardHeaderFlex"
              onDoubleClick={deleteActivity}
            >
              <li className="cardText">{singleAct.title}</li>
              <li className="carFText">{singleAct.time}</li>

              <img className="picFix" src={singleAct.image} />
              <li>{singleAct.breakTime}</li>
            </div>
          </Draggable>
        </div>
      ))}
    </div>
  );
}
