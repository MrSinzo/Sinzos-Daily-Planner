// import axios from 'axios';
import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";

const ImageUpload = () => {
  const [newUser, setNewAuthor] = useState({
    name: "",
    photo: "",
  });

  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profilePicture") ?? "/static/images/avatar/1.jpg"
  );

  const handlePhoto = (e) => {
    // setNewAuthor({ ...newUser, photo: e.target.files[0] });
    // console.log(newUser.photo);

    const reader = new FileReader();

    reader.onload = (event) => {
      localStorage.setItem("profilePicture", event.target.result);
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);

    console.log(newUser.photo);

    axios
      .post("http://localhost:3000/users/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="flex flex-col">
        <div style={{ position: "relative" }}>
          <div
            title="Edit picture"
            className="mt-5 mr-5 hover:cursor-pointer"
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
        </div>
      </div>
    </form>
  );
};

export default ImageUpload;
