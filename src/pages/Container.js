import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from '../components/ActivityList'
import Draggable, {DraggableCore} from "react-draggable";
function Container() {
// const [activity, setActivity] = useState("")

  return (
    <div>
      <Header />
      <ActivityList />
      <Footer />
    </div>
  );
}

export default Container;
