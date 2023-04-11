import React from "react";
import Draggable from "react-draggable";



export default function ActivityList({ activities }) {
  return (
    <div className="flexThis">
      {activities.map((activity) => (
        <Draggable
          key={activity.id}
          axis="both"
          defaultPosition={{ x: 0, y: 0 }}
        >
          <div className="draggableActivity">
            {/* <img className="picFix" src={activity.pic} /> */}
            <li className="activityText">{activity.name}</li>
            <li>{activity.time}</li>
            <li>{activity.break}</li>
            <img className="picFix" src={activity.pic} />
          </div>
        </Draggable>
      ))}
    </div>
  );
}
