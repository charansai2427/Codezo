import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/api";

const dataSlice = createSlice({
    name : "users",
    initialState :{
             value:{
               jobDetails :[],
                register : [],
                login: [],
                allUsers: [],
                jobData: [],
                deleteJob:[],
                deleteUser:[],
                userDetails: {}
             }
    },

    reducers:{
    //   deleteUser:(state,action)=>{
    //     state.value.allUsers.filter((e)=>e.id !== action.payload);
      
    //   }
    },

  extraReducers:(builder)=>{
    builder.addCase(postData.fulfilled , (state,action)=>{
        console.log( action.payload);
        state.value.jobDetails = action.payload;
    })

    builder.addCase(postData.rejected ,(state,action)=>{
        state.error = action.error;
    })

    builder.addCase(getAllJobs.fulfilled , (state,action)=>{
      console.log( action.payload);
      state.value.jobData = action.payload;
  })

  builder.addCase(getAllJobs.rejected ,(state,action)=>{
      state.error = action.error;
  })
    builder.addCase(RegisterUser.fulfilled , (state,action)=>{
      console.log( action.payload);
      state.value.register = action.payload;
  })

    builder.addCase(RegisterUser.rejected ,(state,action)=>{
      state.error = action.error;
    })
    builder.addCase(LoginUser.fulfilled , (state,action)=>{
      state.value.login = action.payload;
      localStorage.clear()
    
      const loginDetails = action.payload;
      const keysArr  = Object.keys(loginDetails);
      keysArr.forEach(e => localStorage.setItem(e,loginDetails[e]))
  })

    builder.addCase(LoginUser.rejected ,(state,action)=>{
      state.error = action.error;
    })
    builder.addCase(getAllUsers.fulfilled , (state,action)=>{
      
      state.value.allUsers = action.payload;
  })

  builder.addCase(getAllUsers.rejected ,(state,action)=>{
      state.error = action.error;
  })

  builder.addCase(deleteUser.fulfilled , (state,action)=>{
    console.log(action.payload);
    state.value.deleteUser= action.payload;
})

builder.addCase(deleteUser.rejected ,(state,action)=>{
    state.error = action.error;
})
builder.addCase(getUser.fulfilled , (state,action)=>{
  state.value.userDetails = action.payload;
})

builder.addCase(getUser.rejected ,(state,action)=>{
  state.error = action.error;
})
  }
})

export const postData = createAsyncThunk("postData", async(arg)=>{
  const token = localStorage.getItem("token");
    const {data} = await axios.post(baseUrl + "/jobs/add",arg,
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }); 
    return data;
})
export const getAllJobs = createAsyncThunk("getAllJObs", async(arg) => {
  const {data} = await axios.get(baseUrl + "/jobs/getAll")
  return data;
})

export const RegisterUser = createAsyncThunk("register",async(e) => {
  const {data} = await axios.post(baseUrl + "/users/register", e)
  return data;
})

export const LoginUser = createAsyncThunk("login",async(e) => {
  const {data} = await axios.post(baseUrl + "/users/login", e)
  return data;
})

export const getAllUsers = createAsyncThunk("getAllUsers",async() => {
  const {data} = await axios.get(baseUrl + "/users/getAll")
  return data;
})

export const deleteUser = createAsyncThunk("deleteUser",async({userId}) => {
  console.log(userId);
  const token = localStorage.getItem("token")
  const {data} = await axios.delete(baseUrl + "/users/delete/" + userId , {
    headers: {
      Authorization : "Bearer "+ token
    }
  });
  return data;
})

export const deleteJob = createAsyncThunk("deleteUser",async({jobId}) => {
  console.log(jobId);
  const token = localStorage.getItem("token")
  const {data} = await axios.delete(baseUrl + "/jobs/delete/" + jobId , {
    headers: {
      Authorization : "Bearer "+ token
    }
  });
  return data;
})

export const getUser = createAsyncThunk("getUser",async({userId}) => {
  console.log(userId);
  const token = localStorage.getItem("token");
  
  const {data} = await axios.get(baseUrl + "/users/getUser/" + userId,
  {
      // params : {
      // userId : userId
      // },
      headers: {
        Authorization : "Bearer " + token 
      }
  })
  return data;
})
export default dataSlice.reducer;
// export const {deleteUser} = dataSlice.actions;