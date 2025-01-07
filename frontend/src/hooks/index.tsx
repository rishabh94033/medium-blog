import axios from "axios";
import { useEffect, useState } from "react";
import BACKEND_URL from "../config";

export default function useblogs(){
    const[loading, setloading]=useState(true);
    const[blogs,setblogs]=useState([]);
    
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${BACKEND_URL}/api/vi/blog/bulk`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setblogs(response.data.post);
                console.log(response.data.post);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setloading(false);
            }
        };
    
        fetchBlogs();
    }, [BACKEND_URL]);
    

    return {
        loading,
        blogs
    }
}
export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export function useblog({id}:{id:string}){
    const[loading, setloading]=useState(true);
    const[blog,setblogs]=useState<Blog>();
    console.log("inside hook");
    
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${BACKEND_URL}/api/vi/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setblogs(response.data.post);
                console.log(response.data.post);
            } catch (error) {
                console.log(error);
                
                console.error("Error fetching blogs:", error);
            } finally {
                setloading(false);
            }
        };
    
        fetchBlogs();
    }, [BACKEND_URL]);
    

    return {
        loading,
        blog
    }
}
