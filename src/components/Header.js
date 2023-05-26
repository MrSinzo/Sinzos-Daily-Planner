import React, { useEffect, useState } from "react";
import uuid from "../utils/helpers";
import backUp from "../images/LARCHMONT-LION.png";

function Header() {
  if (localStorage.getItem("Activity") == null) {
    localStorage.setItem("Activity", "[]");
  }

  const [hideForm, setHideForm] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profilePicture") ?? "/static/images/avatar/1.jpg"
  );
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // If statement that will call either setTitle, setTime, etc. based on what field the user is typing in
    if (name === "title") {
      return setTitle(value);
    }
    if (name === "time") {
      return setTime(value);
    }
    if (name === "breakTime") {
      return setBreakTime(value);
    }
    if (name === "image") {
      return setImage(value);
    }
  };

  useEffect(() => {
    if (image) {
      localStorage.getItem("SPED_IMAGE");
    }
  }, [image]);

  // the object we store the teachers input in
  const newActivity = {
    title: title,
    time: time,
    breakTime: breakTime,
    image: selectedImage,
    key: uuid(),
    x: xPos,
    y: yPos,
  };

  const handleHide = (e) => {
    setHideForm(true);
  };

  // Function that grabs the image data and converts it for localstorage
  const handlePhoto = (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      localStorage.setItem("SPED_IMAGE", event.target.result);
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleShow = () => {
    setHideForm(false);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("photo", newActivity.image);
  };

  //when "Add Activity" button is clicked, it will grab the old array of data,
  //push the new object into the array and then save it to local storage

  const handleClick = (e) => {
    let oldData = JSON.parse(localStorage.getItem("Activity"));
    console.log(newActivity.image);
    if (newActivity.image === "/static/images/avatar/1.jpg") {
      newActivity.image = backUp;
    }
    oldData.push(newActivity);
    console.log(oldData);
    localStorage.setItem("Activity", JSON.stringify(oldData));

    setBreakTime("");
    setTitle("");
    setTime("");
    // temporary bypass till I can get UseEffect working correctly
    useEffect(window.location.reload());
  };

  //Delete function that will delete ALL Activities
  const handleDelete = () => {
    localStorage.removeItem("Activity");
    localStorage.removeItem("SPED_IMAGE");
    useEffect(window.location.reload());
  };

  const resetPositions = () => {
    let initialStorageLoad = JSON.parse(localStorage.getItem("Activity"));

    const keys = Object.keys(initialStorageLoad);
    // console.log(initialStorageLoad.x)
    keys.forEach((key) => {
      setXPos((initialStorageLoad[key].x = 0));
      setYPos((initialStorageLoad[key].y = 0));
      console.log("x " + `${JSON.stringify(initialStorageLoad[key].x)}`);
      console.log("y " + `${JSON.stringify(initialStorageLoad[key].y)}`);
    });

    console.log(initialStorageLoad);

    localStorage.setItem("Activity", JSON.stringify(initialStorageLoad));

    window.location.reload();
  };

  if (hideForm) {
    return (
      <div className="d-flex justify-content-evenly">

        <div className="text-warning basis">
          <h1 className="ctxt">Hello Class!!!!</h1>
        </div>

        <div className="text-warning basis">
          <h1 className="ctxt">Heres our Activities for today!</h1>
        </div>

        <div name="?">
          {" "}
          <div className="d-flex justify-content-evenly m-2">
            <div>
            <button
              className="btn btn-warning btn-sm m-1"
              type="button"
              onClick={handleShow}
            >
              Show Menu
            </button>
            </div>
            <div>
            <button
              className="btn btn-warning btn-sm m-1"
              type="button"
              onClick={resetPositions}
            >
              Reset Positions
            </button>
            </div>
            <div>
            <button
              className="invisible btn btn-danger btn-sm m-1"
              type="button"
              id="deleteAllBtn"
              onClick={handleDelete}
            >
              Delete All Activites
            </button>
          </div>
          </div>
        </div>

        {""}
        <div className="">
          <div className="invisible d-flex flex-wrap justify-content-evenly basis">
            <p>
              <input
                className="bg-dark border border-warning text-warning"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder="Activity?"
              />
            </p>
            <p>
              <input
                className="bg-dark border border-warning text-warning"
                name="time"
                value={time}
                onChange={handleInputChange}
                placeholder="Time?"
              />
            </p>
            <p>
              <input
                className="bg-dark border border-warning text-warning "
                name="breakTime"
                value={breakTime}
                onChange={handleInputChange}
                placeholder="Someone on Break?"
              />
            </p>
            <div className="">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div
                  title=""
                  className="bg-warning"
                  alt="Activity image"
                  src={selectedImage}
                  sx={{
                    width: 250,
                    height: 250,
                  }}
                  onClick={() => document.getElementById("fileInput").click()}
                />
                <input
                  className="bg-dark border border-warning text-warning"
                  // title="Click to edit!"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto}
                  id="fileInput"
                />
              </form>
            </div>
            <button
              className="btn btn-warning btn-sm"
              type="button"
              onClick={handleClick}
            >
              Add Activity
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (!hideForm) {
    return (
      <div className="d-flex justify-content-evenly">

        <div className="text-warning basis">
          <h1 className="ctxt">Hello Class!!!!</h1>
        </div>

        <div className="text-warning basis">
          <h1 className="ctxt">Heres our Activities for today!</h1>
        </div>

        <div className="d-flex justify-content-evenly m-2">
          <div>
            <button
              className="btn btn-warning btn-sm m-1"
              type="button"
              onClick={handleHide}
            >
              Hide Menu
            </button>
          </div>
          <div>
            <button
              className="btn btn-warning btn-sm m-1"
              type="button"
              onClick={resetPositions}
            >
              Reset Positions
            </button>
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm m-1"
              type="button"
              id="deleteAllBtn"
              onClick={handleDelete}
            >
              Delete All Activites
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex flex-wrap justify-content-evenly">
            <p className="">
              <input
                className="bg-dark border border-warning text-warning"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder="Activity?"
              />
            </p>
            <p>
              <input
                className="bg-dark border border-warning text-warning"
                name="time"
                value={time}
                onChange={handleInputChange}
                placeholder="Time?"
              />
            </p>
            <p>
              <input
                className="bg-dark border border-warning text-warning "
                name="breakTime"
                value={breakTime}
                onChange={handleInputChange}
                placeholder="Someone on Break?"
              />
            </p>
            <div className="">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div
                  title=""
                  className="bg-warning"
                  alt="Activity image"
                  src={selectedImage}
                  sx={{
                    width: 250,
                    height: 250,
                  }}
                  onClick={() => document.getElementById("fileInput").click()}
                />
                <input
                  className="bg-dark border border-warning text-warning"
                  // title="Click to edit!"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto}
                  id="fileInput"
                />
              </form>
            </div>
            <button
              className="btn btn-warning btn-sm"
              type="button"
              onClick={handleClick}
            >
              Add Activity
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header; // our connection to the rest of the application
