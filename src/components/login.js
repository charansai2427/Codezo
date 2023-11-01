// import React,{ useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Row, Col, Input, Button } from "reactstrap";
// import { Form, useNavigate,Link } from "react-router-dom";
// import "../styles/register.css";
// import { LoginUser } from "../redux/slices/dataSlice";
// import {AiTwotoneHome} from "react-icons/ai"

// export default function Login() {
//   const [formData, setFormData] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log(dispatch(Login(formData)));
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(token){
//         navigate("/");
//     }
//   })
//   return (
//     <div>
            // <div className="simg">
            //     <AiTwotoneHome onClick={'/data'} className="home" style={{position:"fixed",top:'0em',left:'0em'}}>Home</AiTwotoneHome>
            //     <img src="https://codezo.s3.amazonaws.com/static/img/login-page1.jpg" style={{ width:'70vw',height:'100vh',position:'fixed',top:'0em',left:'-15em'}}/>
            // </div>
//             <Form onSubmit={handleClick}>
//                 <Row style={{ marginTop: "8rem",marginLeft:"55em" ,width:'40vw',height:"63vh"}}>
//                     <Col
//                         md={{
//                             offset: 3,
//                             size: 6,
//                         }}>
//                             <img src="https://codezo.s3.amazonaws.com/static/img/codezo.png" style={{width:'8em',height:'8em'}}/>
//                             <h2 className="text-success" >Codezo</h2>
//                         <p className="w-100" style={{color:"brown",fontSize:'1.3em'}}>FIND YOUR DREAM JOB IN 3 MINUTES</p>
                       

//                         <FormGroup >
//                             <h5 className="fw-secondary text-start">E-Mail Id:</h5>
//                             <Input id="email"  onChange={(e) => setFormData({
//                                 ...formData, email: e.target.value
//                             })
//                             } name="email" placeholder="Enter Your email" type="text"/>
//                         </FormGroup>

//                         <FormGroup>
//                             <h5 className="fw-secondary text-start">Password:</h5>
//                             < Input id="password" onChange={(e) => setFormData({
//                                 ...formData, password: e.target.value
//                             })
//                             } name="password" placeholder="Enter your Secret Password" type="password" />
//                         </FormGroup>

               
//                 <br/>
//                 <Link to={"/generateToken"} >Forgot Your Password?</Link>
//                 <br/>
//                 <h5>Don't have an Account?</h5>
//                 <Link to="/data">
//                 <Button onClick={handleClick} color="green" className="text-center">Login</Button>
//                 </Link>
//                 <br/>
//                 <Row style={{textAlign:'start'}}>
//                 <p>Looking for Job ? </p><Link to="/register" style={{position:'absolute',top:'39.8em',left:'73em',color:'green'}}>Register as Seeker</Link>
//                 </Row>
//                 <Row style={{textAlign:'start'}}>
//                <p>Looking for Hiring?</p><Link to='/register' style={{position:'absolute',top:'42.3em',left:'74em',color:'green'}}>Register as Recruiter.</Link>
//                 </Row>
//                     </Col>
//                 </Row>

//             </Form>
//         </div>
//   );
// }


import { FormGroup, Label, Input, Button } from "reactstrap";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";
import { LoginUser } from "../redux/slices/dataSlice";
import { useEffect, useState } from "react";
export default function Login() {
  const [formData001, setFormData001] = useState({});
  const loginUser = useSelector((state) => state.User.value.register);
  const {token} = LoginUser
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick001 = (e) => {
    e.preventDefault();
    console.log(dispatch(LoginUser(formData001)));
  };
  useEffect(() => {
    
    if(token){
        navigate("/");
    }
  },[token])
  return (
    <div className="register-container">
      
      <div className="imagediv">
        <img src="https://codezo.s3.amazonaws.com/static/img/login-page1.jpg" />
      </div>
      <div className="formDiv">
        <Form className=" border border-2 p-3" onSubmit={handleClick001}>
          <FormGroup>
            <Label for="exampleEmail" className="h4">
              Login Form
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setFormData001({ ...formData001, email: e.target.value })
              }
            />
          </FormGroup>

      
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
              onChange={(e) =>
                setFormData001({ ...formData001, password: e.target.value })
              }
            />
          </FormGroup>


          
          <FormGroup className="text-center">
            <Button className="bg-success" onClick={handleClick001}>
              Register
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}