import Appbar from "../components/appbar";
import { BlogCard } from "../components/blogCard";
import { Skeleton } from "../components/blogsSkeleton";
import useblogs from "../hooks";


interface useblogs{
    laoding:string,
    blogs:Blogs
}
interface Author{
    name:string | "annonymus"
}
interface Blogs{
    content:string,
    title:string,
    author:Author,
    id:string
}
export function Blogs(){
    const{loading,blogs}=useblogs();

    if(loading){
        return(
            <div>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
        </div>
        )
    }
    return(
        <div>
            <Appbar/>
            {blogs.map((blog:Blogs)=>
            <BlogCard author={blog.author.name ||"Anonymous"} title={blog.title} content={blog.content} id={blog.id}/>
            )}
        </div>
    )
}