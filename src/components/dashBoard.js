import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import{AiFillDelete, AiOutlineArrowRight}from "react-icons/ai";
import {Progress} from "reactstrap";
import "../styles/dashboard.css";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

import { RegisterUser, getAllJobs, getAllUsers, postData ,deleteUser,deleteJob} from "../redux/slices/dataSlice";
import { useNavigate } from "react-router-dom";
export default function DashBoard() {
  
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [onOff, setOnOff] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formData1, setFormData1] = useState({});
  // const[deleteUser1,setDeleteUser1] = useState({})
  console.log(formData1);
  const allUsers = useSelector((state) => state.User.value.allUsers);
  const jobData = useSelector((state) => state.User.value.jobData);
  
  
const onHandleClick5 =(id) =>{
 console.log( dispatch(deleteUser({userId : id})));
 window.location.reload();

}

const onHandleClick6 =(id) =>{
  console.log( dispatch(deleteJob({jobId : id})));
  window.location.reload();
 
 }
  
  const toggle = () => setModal(!modal);
  const toggle1 = () => {
    setModal1(!modal1)
    setModal(false)
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(formData));
    setModal(false)
  };
  const onHandleClick2 = () => {
    dispatch(getAllUsers());
    setOnOff(true)
  };
  const onHandleClick3 = (e) => {
    e.preventDefault()
    dispatch(postData(formData1))
  }
  const onHandleClick4 = () => {
    dispatch(getAllJobs())
    setOnOff(false)
  }

  const token = localStorage.getItem("token");
  const access = localStorage.getItem("access");
  useEffect(() => {
    dispatch(getAllUsers());
    if (!token && !access) {
      navigate("/admin/login");

    }


  }, [token, access]);
  

  return (

    <div className="dashboard-container">
      <div className="bar" style={{width:'100vw',height:'6vh',backgroundColor:'rgb(244,179,74)'}}></div>
      <div className="container d-flex justify-content-between">
        <div >
          <img
            src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png" style={{ width: "10em",height:'9vh',marginLeft:'-3.5em',marginTop:'1em'}}
          />
        </div>
        <div>
          <input type="search" placeholder="Search by Keyboard / desigination / role / company" style={{ position:'absolute',top:'3.5em',left:'23em', borderRadius: '50px', width: '27em', height: '3em', border: 'solid rgb(232,235,238)' }} />
          <BiSearch style={{ position:"relative",top:'1.3em',left:"-17.5em", fontSize: '1.5em',color:'gray' }} />
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
    <h5 className="profile">Build My Profile</h5>
    <Progress
  striped
  color="info"
  value={50}
  style={{width:'14em',height:'0.6em'}}
/>
  </div>

      <hr/>

      <div className="d-flex w-100">
      <input type="checkbox" id="check"/>
         <label for="check">
           <i className="fas fa-bars" id="btn"></i>
           <i className="fas fa-times" id="cancel"></i>
           
         </label>
         <div className="sidebar">

           <a href="#" className="active">
             <i className="fas fa-qrcode"></i>
             <span>Dashboard</span>
           </a>
           <a href="#">
           <i className="fa-solid fa-users" ></i>
            <span onClick={onHandleClick2}>Users</span>
           </a>
           <a href="#">
           <i className="fa-solid fa-user" ></i>
              <span onClick={toggle}>Add User</span>
           </a>
           <a href="#">
           <i className="fa-solid fa-explosion" ></i>
               <span  onClick={onHandleClick4}>Jobs</span>
           </a>
           <a href="#">
           <i class="fa-solid fa-bomb" ></i>
              <span onClick={toggle1}>Add Jobs</span>
           </a>
           <a href="/login">
           <i className="fa-solid fa-arrow-right-from-bracket" ></i>
              <span onClick={() => {
              localStorage.clear();
              window.location.reload()
            }}>Logout</span>
           </a>
           
         </div>

        {/* <div className="border text-shadow m-3 p-5">
          <ol
            style={{ listStyle: "none", lineHeight: "3rem", cursor: "pointer" }}
          >
            

            <li onClick={onHandleClick2}>Users</li>
            <li onClick={toggle}>Add User</li>
            <li onClick={onHandleClick4}>Jobs</li>
            <li onClick={toggle1}>Add Job</li>
            <li onClick={() => {
              localStorage.clear();
              window.location.reload()
            }}>LogOut</li>
          </ol>
        </div> */}
        {
          onOff ?
            <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" ,fontSize:'1em',marginLeft:'15em'}}>
              {allUsers &&
                allUsers.map((e,index) => {
                  return (
                    <div className="" >
                      <Card
                        className="my-3"
                        style={{
                          width: "15em", backgroundColor:'rgb(250,225,184)'
                        }}
                      >
  <div className="close" key={e.id}>
  <button type="button" className="delete" onClick={() => onHandleClick5(e._id)}>X</button> 
  {/* <button type="button" class="delete" >X</button>  */}
    </div>
                        <CardBody>
                          <CardTitle tag="h5">{e.username}</CardTitle>
                          <CardText style={{textAlign:'start'}}>
                            <div>
                              <Label>Email:</Label>
                              {e.email}
                            </div>
                            <div>
                              <Label>Access : </Label>
                              {e.access}</div>
                          </CardText>

                        </CardBody>

                      </Card>
                    </div>
                  );
                })}
            </div>
            :
            <div style={{ width: "80%", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem",marginLeft:"14em" }} className="ps-2">
            {jobData &&
              jobData.map((e) => {
                return (
                  <div>
                    <Card
                      className="my-2"
                      style={{
                        width: "18rem",backgroundColor:'rgb(250,225,184)'
                      }}
                    >

                <div className="close" key={e.id}>
  <button type="button" className="delete" onClick={() => onHandleClick6(e._id)} >X</button> 
  {/* <button type="button" class="delete" >X</button>  */}
    </div>
                      <CardBody>
                        <CardTitle tag="h5">{e.title}</CardTitle>
                        <CardText style={{textAlign:"start"}}>
                          <div>
                            <Label className="" style={{ fontWeight: "500" }}>Company :</Label>
                            {e.company}
                          </div>
                          <div>
                            <Label>Role :</Label>
                            {e.role}</div>
                          <div>
                            <Label>State :</Label>
                            {e.States}</div>
                          <div>
                            <Label>Employment Type :</Label>
                            {e.employmenttype}</div>
                          <div>
                            <Label>Functional Area :</Label>
                            {e.functionalarea}</div>
                          <div>
                            <Label>Experience :</Label>
                            {e.experience}</div>
                          <div>
                            <Label>Skills :</Label>
                            {e.skills}</div>
                          <div>
                            <Label>Openings :</Label>
                            {e.openings}</div>
                        </CardText>

                      </CardBody>

                    </Card>
                  </div>
                );
              })}

          </div>
              }
      </div>
      <div style={{ width: "100%" }}>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add User</ModalHeader>
          <ModalBody>
            <Form className="w-100" onSubmit={handleClick}>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                Username:
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Password:
                </Label>
                <Col sm={10}>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Access :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    onChange={(e) =>
                      setFormData({ ...formData, access: e.target.value })
                    }
                  >
                    <option>select</option>
                    <option value="editor">Editor</option>
                    <option value="associate">Associate</option>
                    <option value="recruitor">Recruitor</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col
                  sm={{
                    offset: 2,
                    size: 10,
                  }}
                >
                  <Button className="bg-success">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
      <div style={{ width: "100%" }}>
        <Modal isOpen={modal1} toggle={toggle1}>
          <ModalHeader toggle={toggle1}>Add Job</ModalHeader>
          <ModalBody>
            <Form className="w-100" onSubmit={onHandleClick3}>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Title :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="title"
                    placeholder="Title"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, title: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Company Name :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="company"
                    placeholder="Company Name"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, company: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Role :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="role"
                    placeholder="Role"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, role: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Functional Area :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="functionalarea"
                    placeholder="Functional Area"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, functionalarea: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  States/Cities:
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="States/Cities: "
                    placeholder="States/Cities: "
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, States: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Employment Type:
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="Employment Type: "
                    placeholder="Employment Type "
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, employmenttype: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Skills :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="skills"
                    placeholder="Skills"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, skills: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Experience :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name=" Experience"
                    placeholder=" Experience"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, experience: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Openings :
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleEmail"
                    name="openings"
                    placeholder="Openings"
                    type="text"
                    onChange={(e) =>
                      setFormData1({ ...formData1, openings: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col
                  sm={{
                    offset: 2,
                    size: 10,
                  }}
                >
                  <Button type="submit" className="bg-success">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
