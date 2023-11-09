import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatches} from 'react-router-dom'
import { getonerecruiter } from '../redux/slices/dataSlice';

import UserDashBoard from './userDashBoard';

const JobDetails = () => {
    const dispatch = useDispatch();
    const onerecruiter = useSelector((state) => state.User.value.recruiter);
    console.log(onerecruiter);
    const params = useMatches();
    console.log(params);

    useEffect(() => {
        dispatch(getonerecruiter(params[0].params.jobid));
    }, [])
    return (
        <div >
            <UserDashBoard />
            {
                <div className='container-fluid'>
                    <div className='container bg-lite' >
                        <div className='d-flex justify-content-between ' >
                            <div>Home Job ID: 1078</div>
                            <Link> <div>Save Job</div></Link>
                        </div>
                        <div>
                            <h1> {onerecruiter.title}</h1>
                        </div>
                        <div className='d-flex justify-content-start ms-1 '>
                            <div className='hiring ' >{onerecruiter.hiring}</div>
                            <div className='years ms-2' >{onerecruiter.openings}</div>
                            <div className='years   ms-2 ' >RESUME</div>
                            <div className='years   ms-2' >INTERVIEW</div>
                            <div className='share  '> SHARE JOB</div>
                        </div>
                    </div>

                    <div className='container bg-warning ,  rounded  > '>
                        <div style={{ display: "flex ", justifyContent: "start", margin: "1em" }} >
                            <div>ROLE : {onerecruiter.role}</div>
                            <div style={{ marginLeft: "55em" }} >SKILLS</div>
                        </div>
                        <div style={{ display: "flex ", justifyContent: "start", margin: "1em" }} >
                            <div  >FUNCTIONAL AERA:{onerecruiter.functionalarea}</div>
                            <div style={{ marginLeft: "50em" }} >JOB type:{onerecruiter.employmenttype}</div>
                        </div>
                        <div style={{ margin: "1em" }}  >STATES/CITIES:{onerecruiter.States}</div>
                        <div style={{ margin: "1em" }}>OPENINGS</div>

                        <div style={{ display: "flex ", justifyContent: "start", margin: "1em" }}  >
                            <div>MINIMUM EXPERIENCE:{onerecruiter.minimumExperience}</div>
                            <div style={{ marginLeft: "30em" }}>1YRSPREFERED EXPERIENCE:{onerecruiter.preferredExperience}</div>
                        </div>

                        <div style={{ display: "flex ", justifyContent: "start", margin: "1em" }}   >
                            <div>MINIMUM EDUCATION:{onerecruiter.minimumEducation}</div>
                            <div style={{ marginLeft: "26em" }}>PREFERED EDUCATION:{onerecruiter.preferredEducation}</div>
                        </div>

                        <div style={{ margin: "1em" }}  >JOB DESCRIPTION:{onerecruiter.jobDescription}</div>


                    </div>
                </div>
            }
        </div>
    )
}

export default JobDetails