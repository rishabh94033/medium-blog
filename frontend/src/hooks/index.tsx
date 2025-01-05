import axios from "axios";
import { useEffect, useState } from "react";
import BACKEND_URL from "../config";

export default function useblogs(){
    const[loading, setloading]=useState(true);
    const[blogs,setblogs]=useState([]);
    console.log("inside hook");
    
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

