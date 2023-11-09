import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../redux/slices/dataSlice';
import "../styles/jobDisplay.css";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import JobDetails from '../components/jobDetails';

const JobDisplay = () => {

    const jobState = useSelector((state) => state.User.value.jobData);
    console.log(jobState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])
    return (
        <div>
            <div className='recommends-sec   container'>
                {
                    jobState &&
                    jobState.map((e) => {
                        //  console.log(e);


                        return (
                            <div className='recommends'>
                                <div className='recommends-left' key={e.id}>
                                    <div>
                                        <div><h4>{e.title}</h4></div>
                                        <div>{e.company}</div>
                                        <div><b> Role</b>:{e.role}</div>
                                        <div><b> Functional Area</b>:{e.functionalarea}</div>
                                        <div><b> States/Cities</b>:{e.States}</div>
                                        <div> <b> Employment Type</b>:{e.employmenttype}</div>
                                        <div><b> Skills</b>:
                                            <div>
                                                {e.skills}
                                            </div>
                                        </div>
                                        <div><b>sales</b>:{e.sales}</div>
                                        <div className='hiring-sec'>
                                            <div>
                                                <div className='hiring'>hiring</div>
                                                <div className='year' >{e.experience}</div>
                                                <div className='lpa'   >{e.lpa}</div>
                                                <div className='years' >{e.openings}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* //right/// */}
                                <div className='recommends-right'>
                                    <div className='c-info text-white'>
                                        {/* {e.company.split(" ")[0][0].toUpperCase() + e.company.split(" ")[1][0]} */}
                                    </div>
                                    <div className='date'>
                                        {e.Date}
                                    </div>
                                    <div >
                                        <Link className='link' to={"/user/jobDetails/" + e._id}>
                                            <div>
                                                view job<FaArrowRight className='icons' />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )


                    })
                }
            </div>
        </div>
    )
}

export default JobDisplay