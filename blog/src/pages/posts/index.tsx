import Navigation from "@/components/header";
import RenderAllPosts from "@/components/renderAllPosts";
import { GetAllPosts } from "@/functions/getAllPosts";
import { Post } from "@/types";
import { get } from "http";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const allPosts : Post[] = await GetAllPosts();
  
  return {
    props:{
      allPosts
    }
  }
};

interface BlogProps {
  allPosts: Post[]
}

const Posts = ({ allPosts }: BlogProps) => {

  return (
    <>
      <Navigation />
      <RenderAllPosts allPosts={allPosts} />
    </>
  );
};
export default Posts;
