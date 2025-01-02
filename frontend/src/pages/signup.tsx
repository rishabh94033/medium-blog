import Button from "../components/button";
import LabeledInput from "../components/labeledInput";
import Quote from "../components/quote";

export default function Signup(){
return(
    <>
    <div className="grid grid-cols-2">
    <div>
        <LabeledInput label={"Name"} placeholder={"Enter your Username"} type={"text"}/>
        <LabeledInput label={"Email"} placeholder={"Enter your Email"} type={"text"}/>
        <LabeledInput label={"Password"} placeholder={"Enter your Password"} type={"password"}/>
        <Button label="SignUp"/>
    </div>
    <div className="invisible lg:visible">

        <Quote/>
    </div>
    </div>
    </>
)
}