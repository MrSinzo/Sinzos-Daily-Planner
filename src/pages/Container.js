import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";
// import activities from "../Activities";

function Container() {
  return (
    <div>
      <Header />

      
      <div className="flexThis2">
      <ActivityList />
        <div>
          <h2 className="activityBoxes">↓ Current Activity ↓</h2>{" "}
        </div>
        <div>
          {" "}
          <h2 className="activityBoxes">All Done! </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
