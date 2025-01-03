import { useState } from "react";
import AuthHeader from "../components/authHeader";
import Button from "../components/button";
import LabeledInput from "../components/labeledInput";
import Quote from "../components/quote";
import axios from "axios";
import BACKEND_URL from "../config";
import { useNavigate } from "react-router-dom";


export default function Signup(){
    interface typesignup{
        email:string
        password:string,
        name:string
    }
    const[singupprops, setsignupprops]=useState<typesignup>({
            email:"",
            password:"",
            name:""
        })
        const navigate= useNavigate();
        async function  sendrequest(){
            const response= await axios.post(`${BACKEND_URL}/api/vi/user/signup`,{
                email:singupprops.email,
                password:singupprops.password,
                name:singupprops.name
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
            <AuthHeader toplabel="Create an account" bottomlabelpart1="Already have an account?" bottomlabelpart2="Login" to={"/signin"}/>
        <LabeledInput label={"Name"} placeholder={"Enter your Username"} type={"text"} onchange={(e)=>{
                    setsignupprops({
                        ...singupprops,
                        name: e.target.value})
                }}/>
        <LabeledInput label={"Email"} placeholder={"Enter your Email"} type={"text"} onchange={(e)=>{
                    setsignupprops({
                        ...singupprops,
                        email: e.target.value})
                }}/>
        <LabeledInput label={"Password"} placeholder={"Enter your Password"} type={"password"} onchange={(e)=>{
                    setsignupprops({
                        ...singupprops,
                        password: e.target.value})
                }}/>
        <Button label="Sign-Up" onclick={sendrequest}/>
        
        </div>
    </div>
    <div className="collapse lg:visible">
        <Quote/>
    </div>
    </div>
    </>
)
}