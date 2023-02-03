

export const storeUserData = (data)=>{
    localStorage.setItem("idToken",data);
}
 
export const getUserData = ()=>{
    return localStorage.getItem("idToken");
}


export const storeUserData2 = (data2)=>{
    localStorage.setItem("idToken2",data2);
}


export const getUserData2 = ()=>{
    return localStorage.getItem("idToken2");
}

export const removeUserData1 = ()=>{
    localStorage.removeItem("idToken");
}

export const removeUserData = ()=>{
    localStorage.removeItem("idToken2");
}

export const resetPasswordstoreData = (dataReset)=>{
    localStorage.setItem("kind",dataReset);
}

export const getUserData3= ()=>{
    return localStorage.getItem("kind");
}

export const removeForgetUserData = ()=>{
    localStorage.removeItem("kind");
}