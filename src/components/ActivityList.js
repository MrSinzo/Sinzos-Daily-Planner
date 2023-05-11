import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function ActivityList({ localData }) {
  const [toggleDeleteOne, setToggleDeleteOne] = useState(false);

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

  console.log("b4", localData);


  const detectCard  = (e) => {
    const deleteOne = e.target.getAttribute("id");
    // console.log(deleteOne);

    // find the index number of the arrayed object
    const pos = localData.map((e) => e.key).indexOf(deleteOne);
    // console.log(pos);

    localData.splice(pos, 1);

    // console.log("after", localData)

    localStorage.clear();

    localStorage.setItem("Activity", JSON.stringify(localData));

    useEffect(window.location.reload())
  }


  // quick placeholder for single delete function
  function deleteActivity(e) {
    setToggleDeleteOne(true);
  }

  function hideDelete(e) {
    setToggleDeleteOne(false);
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

    //using these bits below we might be able to get the id key and use it to reference the matching one in local storage?
    // let deleteOne = e.target.getAttribute('className')
    // detectCard(e);

    // console.log(deleteOne)
  };

  //putting positions for cards into local storage
  // useEffect(() => {
  //   localStorage.setItem("positions_div", JSON.stringify(positions));
  // }, [positions]);

  if (toggleDeleteOne) {
    return (
      <div className="flexThisList">
        {localData.map((singleAct) => (
          <div key={singleAct.key} className="flexThis">
            <Draggable
              axis="both"
              defaultPosition={{
                x: Number(singleAct.x),
                y: Number(singleAct.y),
              }}
              onStop={handleStop}
            >
              <div
                id={singleAct.key}
                key={singleAct.key}
                className="draggableActivity cardHeaderFlex"
                onDoubleClick={hideDelete}
              >
                <li className="cardText">{singleAct.title}</li>
                <li className="carFText">{singleAct.time}</li>

                <img className="picFix" src={singleAct.image} />
                <li>{singleAct.breakTime}</li>
                <button id={singleAct.key} onClick={detectCard}>
                  DELETE
                </button>
              </div>
            </Draggable>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flexThisList">
        {localData.map((singleAct) => (
          <div key={singleAct.key} className="flexThis">
            <Draggable
              axis="both"
              defaultPosition={{
                x: Number(singleAct.x),
                y: Number(singleAct.y),
              }}
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
}
