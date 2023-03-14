import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";
import Draggable, { DraggableCore } from "react-draggable";
function Container() {
  // const [activity, setActivity] = useState("")

  return (
    <div>
      <Header />
      <div className="flexThis"> 
      <div className="borderBox"><h2>The Agenda:</h2></div>
      <div className="borderBox2"><h2>Current Activity:</h2> </div>
      <div className="borderBox2"><h2>All Done!</h2></div>
      </div>
      <div>
      <ActivityList id="position1" activity="Bus to Class" time="9:00-9:15" />
      <ActivityList id="position2" activity="Puzzles" time="9:15-9:30" />
      <ActivityList id="position3" activity="Writing" time="9:30-9:45" />
      <ActivityList id="position4" activity="Task Boxes" time="9:45-10:00" />
      <ActivityList id="position5" activity="Specialist's" time="10:05-10:35" break="V Break 10:05-10:25" />
      <ActivityList id="position6" activity="start" time="9:00-9:15" />
      <ActivityList id="position7" activity="start" time="9:00-9:15" />
        </div>
      <Footer />
    </div>
  );
}

export default Container;
