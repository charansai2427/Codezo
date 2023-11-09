import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { Progress } from "reactstrap";
import "../styles/uploadPic.scss"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, uploadImage } from '../redux/slices/dataSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UploadPic() {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const upload = useSelector((state) => state.User.value.upload)
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(image);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setShow(!show)
  }
  const Handle12 = () => {
    navigate('/home')
  }
  const onHandleClick = (e) => {
    const data = new FormData()
    data.append("file", image);
    data.append("upload_preset", "p4mod1jk");
    data.append("cloud_name", "dzeek4uww")

    console.log(data);

    dispatch(uploadImage(data));
    dispatch(updateUser({ profile_pic: upload.url }))
  }
  return (
    <div className='container-fluid'>

      <div className="bar" style={{ width: '100vw', height: '6vh', backgroundColor: 'rgb(244,179,74)' }}></div>
      <div className="container d-flex justify-content-between">
        <div onClick={Handle12}>
          <img
            src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png" style={{ width: "10em", height: '9vh', marginLeft: '-3.5em', marginTop: '1em', cursor: 'pointer' }}
          />
        </div>
        <div>
          <input type="search" placeholder="Search by Keyboard / desigination / role / company" style={{ position: 'absolute', top: '3.5em', left: '18em', borderRadius: '50px', width: '27em', height: '3em', border: 'solid rgb(232,235,238)' }} />
          <BiSearch style={{ position: "absolute", top: '3em', left: "28em", fontSize: '1.5em', color: 'gray' }} />
        </div>
      </div>

      <div className="drop">
        <p className="downbtn" >Jobs</p>
        <div className="drop-content">
          <div className="column">
            <h5 className="job">Jobs by Hot Skills</h5>
            <a href="#">Python</a>
            <a href="#">Java</a>
            <a href="#">Javascript</a>
            <a href="#">React Js</a>
            <a href="#">PHP</a>
          </div>

          <div className="left"></div>

          <div className="column">
            <h5 className="jloc">Jobs at Top Location</h5>
            <a href="#">Remote</a>
            <a href="#">Delhi/Delhi INR</a>
            <a href="#">Mumbai</a>
            <a href="#">Banglore</a>
            <a href="#">Hyderabad</a>
            <a href="#">Chennai</a>
            <a href="#">Pune</a>

          </div>
        </div>
      </div>

      <div className="build">

        <span onClick={handleSubmit} style={{ color: 'red', fontSize: '1.5em' }}  >Build My Profile</span>

        <Progress
          striped
          color="info"
          value={50}
          style={{ width: '14em', height: '0.6em' }}
        />
      </div>
      <div className="border rounded-pill p-2 border-success text-success" style={{ width: '4.5em', marginLeft: '65em', marginTop: "-2.5em" }}>
        iFollow
      </div>
      <div className="profile-name">
        <p>{email && email.slice(0, 2).toUpperCase()}</p>
      </div>



      <div className='container'>
        <h2 className='text-secondary' style={{ textAlign: "start" }}>Edit Photo</h2>
        <p className='h4' style={{ textAlign: "start" }}>Photo ***</p>
        <input type='file' onChange={(e) => setImage(e.target.files[0])} style={{ backgroundColor: 'rgb(244,179,74)' }} />
        <p style={{ textAlign: "start" }}>Please upload your profile pic</p>
        <div className='display-pic'>

          {
            upload.url ? <img src={upload.url} /> : <p></p>
          }

        </div>
        <button className='saves' onClick={onHandleClick}>Save</button>
      </div>
    </div>
  )
}

export default UploadPic