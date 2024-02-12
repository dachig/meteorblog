import Navigation from "@/components/header"
import RenderAllPosts from "@/components/renderAllPosts"
import { GetAllPosts } from "@/functions/getAllPosts"
import { Post } from "@/types"
import { useEffect, useState } from "react"

const Posts = () => {
    const [allPosts,setAllPosts] = useState<Post[]>([]);

    useEffect(()=>{
        const fetchAllPosts = async() => {
            const allPosts: Post[] = await GetAllPosts();
            setAllPosts(allPosts)
        }
        fetchAllPosts();
    },[])

    return (
      <>
        <Navigation />
        <RenderAllPosts allPosts={allPosts}/>
      </>
    );
}
export default Posts;