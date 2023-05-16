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

    let dummyPositionsX = 0;
    let dummyPositionsY = 0;

    const card = e.target.getAttribute("id");
    // returns the key value of the element ( example -- "h5t6")

    const cardIndex = localData.map((e) => e.key).indexOf(card);
    // returns an index number relating to clicked element (card)

    setXPos((dummyPositionsX = data.x)); //gives us a straight number
    setYPos((dummyPositionsY = data.y)); //gives us a straight number

    localData[cardIndex].x = data.x
    console.log(localData[cardIndex].x)
    localData[cardIndex].y = data.y;
    console.log(localData[cardIndex].y)

    localStorage.setItem("Activity", JSON.stringify(localData));
  };

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
                <li className="cardText">{singleAct.time}</li>
                <img className="picFix" src={singleAct.image} />
                <li className="cardText">{singleAct.breakTime}</li>
                <button
                  className="activityText"
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
                <li className="cardText">{singleAct.time}</li>

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
