import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";
import activities from "../Activities";
import ImageUpload from "../components/ImageUpload";

function Container() {

  return (
    <div>
      <Header />
      <div className="">
        <ActivityList/>
      </div>
      <div className="flexThis">
        <div className="borderBox2">
          <h2>Current Activity:</h2>{" "}
        </div>
        <div className="borderBox2">
          <h2>All Done!</h2>
        </div>
      </div>
      <div>
        <ImageUpload/>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
