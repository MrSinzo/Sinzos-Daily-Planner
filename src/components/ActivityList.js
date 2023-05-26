import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function ActivityList({ localData }) {
  const [toggleDeleteOne, setToggleDeleteOne] = useState(false);

  localData = JSON.parse(localStorage.getItem("Activity"));
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();

  const deleteCard = (e) => {
    //gets the "ID" value form the html element"
    const deleteOne = e.target.getAttribute("id");

    // find the index number of the arrayed object, stores the number in the variable
    const pos = localData.map((e) => e.key).indexOf(deleteOne);

    //pulls the item from the array
    localData.splice(pos, 1);

    // clears local Storage so new, altered array may be added
    localStorage.clear();

    localStorage.setItem("Activity", JSON.stringify(localData));

    useEffect(window.location.reload());
  };

  // quick placeholder for single delete function
  function deleteActivity(e) {
    setToggleDeleteOne(true);
  }

  function hideDelete(e) {
    setToggleDeleteOne(false);
  }

  const handleStop = (e, data) => {
    const myCard = e.target.getAttribute("id");
    // returns the key value of the element ( example -- "h5t6")
    console.log(myCard);

    const cardIndexNum = localData.map((e) => e.key).indexOf(myCard);
    // returns an index number relating to clicked element (card)
    let dummyPositionsX = 0;
    let dummyPositionsY = 0;
    // let dummyPositionsX = Number(localData[cardIndexNum].x);
    // console.log(dummyPositionsX)
    // let dummyPositionsY = Number(localData[cardIndexNum].y);
    console.log(data.x);
    setXPos((dummyPositionsX = data.x)); //gives us a straight number
    console.log(localData[cardIndexNum]);
    setYPos((dummyPositionsY = data.y)); //gives us a straight number

    localData[cardIndexNum].x = data.x;
    console.log(localData[cardIndexNum]);
    localData[cardIndexNum].y = data.y;
    console.log(localData[cardIndexNum].y);

    localStorage.setItem("Activity", JSON.stringify(localData));
  };

  if (toggleDeleteOne) {
    return (
      <div className="d-flex flex-wrap">
        {localData.map((singleAct) => (
          <div key={singleAct.key} id={singleAct.key}>
            <Draggable
              axis="both"
              id={singleAct.key}
              defaultPosition={{
                x: Number(singleAct.x),
                y: Number(singleAct.y),
              }}
              onStop={handleStop}
            >
              <div
                className="card border border-5 border-warning bg-dark"
                id={singleAct.key}
                key={singleAct.key}
                onDoubleClick={hideDelete}
              >
                <img src={singleAct.image} className="card-img-top picFix" />
                <div id={singleAct.key} className="card-body">
                  <h5
                    id={singleAct.key}
                    className="card-text text-warning ctxt"
                  >
                    {singleAct.title}
                  </h5>
                  <p id={singleAct.key} className="card-text text-warning ctxt">
                    {singleAct.time}
                  </p>
                  <p id={singleAct.key} className="card-text text-warning ctxt">
                    {singleAct.breakTime}
                  </p>
                </div>
                <button
                  className="card-text bg-danger text-warning"
                  id={singleAct.key}
                  onClick={deleteCard}
                >
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
      <div className="d-flex flex-wrap">
        {localData.map((singleAct) => (
          <div key={singleAct.key} id={singleAct.key}>
            <Draggable
              axis="both"
              defaultPosition={{
                x: Number(singleAct.x),
                y: Number(singleAct.y),
              }}
              onStop={handleStop}
            >
              <div
                className="card border border-5 border-warning bg-dark"
                id={singleAct.key}
                key={singleAct.key}
                onDoubleClick={deleteActivity}
              >
                <img src={singleAct.image} className="card-img-top picFix" />
                <div id={singleAct.key}>
                  <h5
                    id={singleAct.key}
                    className="card-text text-warning ctxt"
                  >
                    {singleAct.title}
                  </h5>
                  <p id={singleAct.key} className="card-text text-warning ctxt">
                    {singleAct.time}
                  </p>
                  <p id={singleAct.key} className="card-text text-warning ctxt">
                    {singleAct.breakTime}
                  </p>
                </div>
              </div>
            </Draggable>
          </div>
        ))}
      </div>
    );
  }
}
