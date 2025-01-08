import axios from "axios";
import ApiUri from "../Constants/ApiUrl";
import store from "../Redux/store";
import { updateAppStore } from "../Redux/Slices/appSlice";
import { loginApi } from "../Services/authentication";

export const setDefaultHeaders = (token:string,url:string=ApiUri.BaseUri)=>{
    axios.defaults.baseURL = url;
    axios.defaults.headers.common['Authorization'] = "Bearer "+token;
}

export const clearDefaultHeaders = ()=>{
    delete axios.defaults.baseURL
    delete axios.defaults.headers.common['Authorization']
}

export const handleLogin = ()=>{
    console.log("inside handle login")
    const {loginEmail,loginPassword} =store.getState().inputs;
    if(!loginEmail||!loginPassword){
        console.log("here")
        updateAppStore({
            error:true,
            errorMessage:"All fields are required"
        });
        return;
    }

    updateAppStore({
        loading:true,
    });

    loginApi({email:loginEmail,password:loginPassword})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err);
    })
}