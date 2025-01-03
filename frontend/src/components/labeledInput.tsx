type LabeledInputProps = {
    label: string;
    placeholder: string;
    type: string;
    onchange:(e:React.ChangeEvent<HTMLInputElement>)=>void
  };
export default function LabeledInput({ label ,placeholder, type,onchange}:LabeledInputProps){
return(
    <div>
        <div className="block mt-2 mb-1 text-m font-semibold text-black">
    {label}
        </div>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={onchange}type={type} placeholder={placeholder}/>
    </div>
)
}