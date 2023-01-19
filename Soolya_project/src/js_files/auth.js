import { getUserData, removeUserData } from "./storage"



export const isAuthenticated = ()=>{
   return getUserData()!=null?true:false;
}

// export const isAuthenticatedLogin = ()=>{
//    return getUserData()!=null?true:false;
// }


// export const logOut = ()=>{
//       removeUserData();
// } 