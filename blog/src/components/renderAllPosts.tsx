import { Post } from "@/types";
import Image from "next/image";
import BlogPostDialog from "./blogPostDialog";

interface AllPostsProps {
  allPosts: Post[];
}

const RenderAllPosts = ({ allPosts }: AllPostsProps) => {
  return (
    <div className="flex flex-wrap sm:mx-6 md:mx-20 lg:mx-40 2xl:mx-64 my-6">
      {allPosts.map((post: any) => (
        <BlogPostDialog lastPost={post}/>
      ))}
    </div>
  );
};

export default RenderAllPosts;