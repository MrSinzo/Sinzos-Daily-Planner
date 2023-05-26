import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";

function Container() {
  return (
    <div className="mt-3">
      <Header />

      <div>
        <section className="d-flex justify-content-evenly">
          <div className="basis">
            <ActivityList />
          </div>
          <div className="activityBoxes border border-5 border-warning">
            <h2 className="text-warning ctxt fw-bold">↓ Current Activity ↓</h2>{" "}
          </div>
          <div className="activityBoxes border border-5 border-warning">
            {" "}
            <h2 className="text-warning ctxt fw-bold">All Done! </h2>
          </div>
        </section>
      </div>
      <footer className="ctxt">
        <Footer />
      </footer>
    </div>
  );
}

export default Container;
