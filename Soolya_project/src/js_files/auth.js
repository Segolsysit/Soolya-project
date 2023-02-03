import { getUserData, getUserData2, getUserData3, removeUserData, removeUserData1 } from "./storage"



export const isAuthenticated = ()=>{
   return getUserData()!=null?true:false;
}

export const isAuthenticatedLogin = ()=>{
   return getUserData2()!=null?true:false;
}

export const logOut = ()=>{
      removeUserData1();
      removeUserData();
}

export const isAuthenticatedReset = ()=>{
   return getUserData3()!=null?true:false;
}