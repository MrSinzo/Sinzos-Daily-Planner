import React, { useEffect } from "react";
import { useState } from "react";
import uuid from "../utils/helpers";

function Header() {
  if (localStorage.getItem("Activity") == null) {
    localStorage.setItem("Activity", "[]");
  }

  //   const [newActivity, setNewActivity] = useState(""
  //  )

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profilePicture") ?? "/static/images/avatar/1.jpg"
  );
  // const file = document.querySelector("input[type=file]").files[0]
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setTitle or setTime based on what field the user is typing in
    // we can handle the extra stuff with and expanded if statement probably
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

  // const [file, setFile] = useState("");

  useEffect(() => {
    if (image) {
      localStorage.getItem("profilePicture");
    }
  }, [image]);

  // the object we store the teachers input in
  const newActivity = {
    title: title,
    time: time,
    breakTime: breakTime,
    image: selectedImage,
    key: uuid(),
  };

  // console.log(image);

  const handlePhoto = (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      localStorage.setItem("SPED_IMAGE", event.target.result);
      setSelectedImage(event.target.result);
      // let info = event.target.result;
      console.log(selectedImage);
    };
    reader.readAsDataURL(e.target.files[0]);
    // console.log(newImage)
    // setImage(newImage);
  };
  console.log(selectedImage)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newActivity.image);

    console.log(newActivity.image);
  };

  //when "Add Activity" button is clicked it will grab the old arrat of data,
  //push the new object into the array and then save it to local storage

  const handleClick = (e) => {
    let oldData = JSON.parse(localStorage.getItem("Activity"));

    // localStorage.setItem("profilePicture", event.target.result);
    // setSelectedImage(event.target.result);
    oldData.push(newActivity);
    localStorage.setItem("Activity", JSON.stringify(oldData));
    // };
    // console.log(reader);
    // reader.readAsDataURL(e.target.files[0]);
  };

  //working delte fo ALL Activities
  // const handleDelete = useEffect(() => {
  //   return localStorage.removeItem("Activity")
  // })

  const handleDelete = useEffect(() => {

    localStorage.removeItem("Activity");
    localStorage.removeItem("SPED_IMAGE")
    
  });

  // useEffect(() => {

  // })

  return (
    <div>
      <div className="flexThis">
        <div className="">
          <li>
            <input
              className="activityText"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Activity?"
            />
          </li>
          <li>
            <input
              className="activityText"
              name="time"
              value={time}
              onChange={handleInputChange}
              placeholder="Time?"
            />
          </li>
          <li>
            <input
              className="activityText"
              name="breakTime"
              value={breakTime}
              onChange={handleInputChange}
              placeholder="Someone on Break?"
            />
          </li>
          <li>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div
                    title="Edit picture"
                    className=""
                    alt="Profile Picture"
                    src={selectedImage}
                    sx={{
                      width: 250,
                      height: 250,
                    }}
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  <input
                    title="Click to edit!"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                    id="fileInput"
                  />
            </form>
          </li>
          <button onClick={handleClick}>Add Activity</button>
        </div>
        <h1>Hello Class!!!!</h1>
        <h2>Heres our Activities for today!</h2>
        <br />
      </div>
      <div>
        <button className="" id="deleteAllBtn" onClick={handleDelete}>
          Delete All Activites
        </button>
      </div>
    </div>
  );
}

export default Header; // our connection to the rest of the application

// const handleClick = (e) => {
//   const reader = new FileReader();

//   reader.onload = (event) => {
//     let oldData = JSON.parse(localStorage.getItem("Activity"));
//     localStorage.setItem("profilePicture", event.target.result);
//     setSelectedImage(event.target.result);
//     oldData.push(newActivity);
//     localStorage.setItem("Activity", JSON.stringify(oldData));
//   };
//   console.log(reader);
//   reader.readAsDataURL(e.target.files[0]);
// };

// const handlePhoto = (e) => {
//   // setNewAuthor({ ...newUser, photo: e.target.files[0] });
//   // console.log(newUser.photo);

//   const reader = new FileReader();

//   const { name, value } = e.target;
//   if (name === "image") {
//     reader.onload = (event) => {
//       // localStorage.setItem('profilePicture', event.target.result);
//       // setSelectedImage(event.target.result);
//       event.target.result;
//       console.log(event.target.result);
//       console.log(value)
//       setImage(event.target.result)
//     };
//   }

//   console.log(reader);
//   reader.readAsDataURL(e.target.files[0]);
// };
