import React, { useEffect ,useState} from "react";
import "../styles/buildmyprofile.scss";
import { GoSearch } from "react-icons/go";
import { MdModeEditOutline} from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import "../styles/home.scss";
import "../styles/buildmyprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/dataSlice";
import { Progress } from "reactstrap";


const BuildProfile = () => {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const access = localStorage.getItem("access");
  const [axis,setAxis] = useState("");
  console.log(axis);
  const userDetails = useSelector((state) => state.User.value.userDetails);
  console.log(userDetails);
const navigate = useNavigate();
  const HandleClock=() =>{
   window.location.reload('/profile/edit/:userId')
   }
  //  const HandleTrick=()=>{
  //   navigate('/profile/edit/:userId')
  //  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser({ userId: userId }));
    setAxis(access)
  }, []);

  return (
    <div className="buldmyprofile-container  ">
     
      <div className="container profile-container">
        <p style={{margin:'0em',fontSize:'2em',fontWeight:'0em'}}>Profile</p>
        <div className="profile-pic-container">
           <div className="profile-pic">
            {
              userDetails? <img className="profile-image" src={userDetails.profile_pic} alt="Img"/> :  <p className="h1" >{email && email.slice(0,2).toUpperCase()}</p>
            }
          
            <MdModeEditOutline  className="edit-icon"/> 
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
                  readOnly
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
                  placeholder={`${userDetails.name? userDetails.name:"N/A"}`}
                  readOnly
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
                <label>Phone Number :</label>
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
                  type="text"
                  placeholder={`${userDetails.dob? userDetails.dob:"N/A"}`}
                  readOnly
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
                  placeholder={`${userDetails.gender? userDetails.gender:"N/A"}`}
                  readOnly
                />
              </div>
            </div>
            <div className="no1">
              <div><label>Address :</label></div>
            <textarea readOnly cols={50}>{`${userDetails.gender? userDetails.gender:"N/A"}`}</textarea>
            </div>
          </div>
          {
            (axis === "Admin")?
            <button onClick={HandleClock} style={{marginLeft:'30em',border:'1px solid gray',borderRadius:'20%',width:"4em"}}>Save</button>
            :

          <div className="update">
           <Link to={"/profile/edit/" + userId}> <button type="button">Update Details</button></Link>       
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;