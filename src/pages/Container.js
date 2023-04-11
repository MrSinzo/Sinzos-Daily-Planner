import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";
import activities from "../Activities";

function Container() {

  return (
    <div>
      <Header />
      <div className="">
        <ActivityList activities={activities} />
      </div>
      <div className="flexThis">
        <div className="borderBox2">
          <h2>Current Activity:</h2>{" "}
        </div>
        <div className="borderBox2">
          <h2>All Done!</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
