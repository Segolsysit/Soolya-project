import axios from "axios";


axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";

const apiKey ="AIzaSyDX3R0TxlNPpoez5Gs7jgVtuTMb-GaL6og"

const registerUrl = `/accounts:signUp?key=${apiKey}`;

const loginUrl = `/accounts:signInWithPassword?key=${apiKey}`;

const resetUrl = `/accounts:sendOobCode?key=${apiKey}`

export const RegisterApi = (inputs)=>{
   let data = {
     fname:inputs.fname,
     lname:inputs.fname,
     email:inputs.email,
     password:inputs.password,
     c_password:inputs.c_password
   }  

   return axios.post(registerUrl,data)  
}

export const LoginApi = (inp)=>{
     let data2 ={
      email:inp.email,
      password:inp.password
     }
     return axios.post(loginUrl,data2)
}

export const ResetApi = (inputs)=>{
      let dataReset = {
          requestType:"PASSWORD_RESET",
          email:inputs
      }

      return axios.post(resetUrl,dataReset)
}