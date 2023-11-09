import React from "react"
import "../styles/home.scss"
import UserDashBoard from "./userDashBoard"
import JobDisplay from "./jobDisplay"
export default function Home() {
  
    return(
 
        <div>
          <UserDashBoard/>
          <JobDisplay/>
        </div>  
        
    )

}

