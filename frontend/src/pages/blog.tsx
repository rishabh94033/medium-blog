
import { useParams } from "react-router-dom";
import Appbar from "../components/appbar";
import { FullBlog } from "../components/fullBLog";
import { useblog } from "../hooks";

export default function Blog(){
    const { id } = useParams();
    const {loading, blog} =useblog({id: id ||""});
    if(loading){
    return(
        <div>
            loading...
        </div>
    )}
    return(
    <div>
        <div>
            <Appbar/>
        </div>
   <FullBlog blog={blog}/>
    </div>
    )
    }

