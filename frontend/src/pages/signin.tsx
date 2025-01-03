import { useState } from "react";
import AuthHeader from "../components/authHeader";
import Button from "../components/button";
import LabeledInput from "../components/labeledInput";
import Quote from "../components/quote";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../config";

export default function Signin(){
   interface SigninProps {
        email: string;
        password: string;
      };
      
    const[singinprops, setsigninprops]=useState<SigninProps>({
        email:"",
        password:""
    })
    const navigate= useNavigate();
    async function  sendrequest(){
        const response= await axios.post(`${BACKEND_URL}/api/vi/user/signup`,{
            email:singinprops.email,
            password:singinprops.password,
        })
        const token=response.data.token;
        localStorage.setItem("token", token)
    navigate("/blogs")
    }
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center w-full h-screen">
                <div className="w-3/5">
                    <AuthHeader toplabel="Login to existing account" bottomlabelpart1="Don't have an account?" bottomlabelpart2="Sign-Up" to={"/signup"}/>
                <LabeledInput label={"Email"} placeholder={"Enter your Email"} type={"text"} onchange={(e)=>{
                    setsigninprops({
                        ...singinprops,
                        email: e.target.value})
                }}/>
                <LabeledInput label={"Password"} placeholder={"Enter your Password"} type={"password"} onchange={(e)=>{
                    setsigninprops({
                        ...singinprops,
                        password:e.target.value})
                }}/>
                <Button label="Sign-In" onclick={sendrequest}/>
                </div>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
            </div>
        </>
    )
    }