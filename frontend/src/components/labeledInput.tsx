type LabeledInputProps = {
    label: string;
    placeholder: string;
    type: string;
  };
export default function LabeledInput({ label ,placeholder, type}:LabeledInputProps){
return(
    <div>
        <div>
    {label}
        </div>
        <input type={type} placeholder={placeholder}/>
    </div>
)
}