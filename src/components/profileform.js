import React, { useEffect, useState } from "react";
import "../styles/buildmyprofile.scss";
import { GoSearch } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { Progress } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

import "../styles/home.scss";
import "../styles/profileform.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../redux/slices/dataSlice";

const ProfileForm = () => {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const date = new Date();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);


  const handleSubmit = () => {
    setShow(!show)
  }
  console.log(formData);
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateUser({ ...formData, lastupdatetime: date }));
    alert("Saved Successfully")
  }
  const handleClick1 = () => {
    setOpen(!open)
  }

  const onHandleClick7 = () => {
    window.location.reload('/admin/dashboard')
  }
  const userDetails = useSelector((state) => state.User.value.userDetails);
  console.log(userDetails);

  useEffect(() => {
    if (!token) navigate("/accounts/login")
    dispatch(getUser({ userId: userId }));
  }, [token]);
  return (
    <div className="buldmyprofile-container container-fluid ">

      <div className="bar" style={{ width: '100vw', height: '6vh', backgroundColor: 'rgb(244,179,74)' }}></div>
      <div className="container d-flex justify-content-between">
        <div >
          <img
            src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png" onClick={onHandleClick7} style={{ width: "10em", height: '9vh', marginLeft: '-3.5em', marginTop: '1em', cursor: 'pointer' }}
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
      <div className={`my ${show ? "open" : "closes"}`} style={{ marginTop: '2em' }}>


      </div>

      <div className="border rounded-pill p-2 border-success text-success" style={{ width: '4.5em', marginLeft: '65em', marginTop: "-2.5em" }}>
        iFollow
      </div>

      <div onClick={handleClick1} className="profile-name">
        <p>{email && email.slice(0, 2).toUpperCase()}</p>
      </div>


      <div className="container profile-container">
        <h2>Profile</h2>
        <div className="profile-pic-container">
          <div className="profile-pic">
            {
              userDetails ? <img className="profile-image" src={userDetails.profile_pic} alt="Img" /> : <p className="h1" >{email && email.slice(0, 2).toUpperCase()}</p>
            }
            <MdModeEditOutline onClick={() => navigate("/profile/edit-pic")} className="edit-icon" />
          </div>
        </div>
        <div className="profile-div">
          <div className="profile-details">
            <div className="no1">
              <div>
                <label>User Name :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`${userDetails.username}`}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>
            <div className="no1">

              <div>
                <label>Name :</label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={`${userDetails.name ? userDetails.name : "N/A"}`}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

            </div>
            <div className="no1">

              <div>
                <label>Email Address :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`${userDetails.email}`}
                  readOnly
                />
              </div>

            </div>
            <div className="no1">

              <div>
                <label>Phone Number</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`+91${userDetails.mobilenumber}`}
                  readOnly
                />
              </div>

            </div>
            <div className="no1">
              <div>
                <label>Date of Birth :</label>
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Dob"
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>
            </div>
            <div className="no1">
              <div>
                <label>Gender :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="gender"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
              </div>
            </div>
            <div className="no1">
              <div><label>Address :</label></div>
              <textarea onChange={(e) => setFormData({ ...formData, address: e.target.value })}>{`${userDetails.gender ? userDetails.gender : "N/A"}`}</textarea>
            </div>
          </div>
          <div className="update">
            <button onClick={handleClick} type="button">Save Details</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;