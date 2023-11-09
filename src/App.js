import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './components/register';
import AdminLogin from './components/adminLogin';
import DashBoard from './components/dashBoard';


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Login from './components/login';
import BuildProfile from './components/buildmyprofile';
import ProfileForm from './components/profileform';
import Front from './components/frontPage';
import UploadPic from './components/uploadPic';
import UserDashBoard from './components/userDashBoard';
import JobDetails from './components/jobDetails';
function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Front />
    },
    {
      path: "/home",
      element: <Home />
    },
    
    {
      path: "user/jobdetails/:jobid",
      element: <JobDetails/>
    },
    {
      path: "/userDashBoard",
      element: <UserDashBoard />
    },

    {
      path: "/frontpage",
      element: <Front />
    },
    {
      path: "accounts/login",
      element: <Login />
    },
    {
      path: "/profile=/:userId",
      element: <BuildProfile />,
    },
    {
      path: "/profile/edit/:userId",
      element: <ProfileForm />
    },

    {
      path: "accounts/register",
      element: <Register />
    },
    {
      path: "admin/dashboard",
      element: <DashBoard />
    },

    {
      path: "/login",
      element: <AdminLogin />
    },

    {
      path: "/profile/edit-pic",
      element: <UploadPic />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;