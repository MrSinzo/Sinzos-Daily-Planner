import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";
// import activities from "../Activities";

function Container() {
  return (
    <div className="">
      <Header />

      
      <div className="d-flex p-2">
      <ActivityList className="flex-fill"/>
        <div className="boxBasis">
          <h2 className="bg-dark border">↓ Current Activity ↓</h2>{" "}
        </div>
        <div className="boxBasis">
          {" "}
          <h2 className="bg-dark border">All Done! </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
