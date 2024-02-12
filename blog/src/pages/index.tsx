import BlogPostDialog from "@/components/blogPostDialog";
import Navigation from "@/components/header";
import GetLastPost from "@/functions/getLastPost";
import { Post } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [lastPost,setLastPost] = useState<Post>(Object);

  useEffect(()=>{
    const fetchLastPost = async()=>{
      const lastPost: Post = await GetLastPost();
      setLastPost(lastPost);
    } 
    fetchLastPost();
  },[])
  console.log(lastPost)

  return(
    <>
    <Navigation/>
    <BlogPostDialog lastPost={lastPost}/>
    </>
  )
}
export default Home;