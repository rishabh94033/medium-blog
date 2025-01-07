
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/fullBLog";
import { useblog } from "../hooks";
import { Skeleton } from "../components/FullBlogSkeleton";

export default function Blog(){
    const { id } = useParams();
    const {loading, blog} =useblog({id: id ||""});
    if(loading){
    return(
       <Skeleton/>
    )}
    return(
    <div>

   {/* <FullBlog blog={blog}/> */} 
   { /*there was an error of undefined that if backend fails to fetch blog then so solution is  */}


   {blog && <FullBlog blog={blog} />} 
   {/* // this means if blog exist then call fullblog */}
    </div>
    )
    }








