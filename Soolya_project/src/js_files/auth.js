import { getUserData, getUserData2, removeUserData } from "./storage"



export const isAuthenticated = ()=>{
   return getUserData()!=null?true:false;
}

export const isAuthenticatedLogin = ()=>{
   return getUserData2()!=null?true:false;
}


export const logOut = ()=>{
      removeUserData();
} 