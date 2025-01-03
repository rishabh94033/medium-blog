import { Link } from "react-router-dom"

interface authHeaderprops{
    toplabel:string,
    bottomlabelpart1:string,
    bottomlabelpart2:string,
    to:string
}
export default function AuthHeader({toplabel, bottomlabelpart1,bottomlabelpart2,to}:authHeaderprops){
    return(
    <div className="flex flex-col justify-center items-center">
        <div className="mb-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 ">
            {toplabel}
        </div>
        <div className="flex mb-3 text-l font-medium leading-none tracking-tight text-gray-500">
        <div>
            {bottomlabelpart1}
        </div>
        <div className="ml-1 text-blue-500 font-semibold mb-4">
            <Link to={to}>{bottomlabelpart2}</Link>
        </div>
        </div>
    </div>)
}