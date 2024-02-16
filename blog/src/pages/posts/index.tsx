import Navigation from "@/components/header";
import RenderAllPosts from "@/components/renderAllPosts";
import { GetAllPosts } from "@/functions/getAllPosts";
import { Post } from "@/types";

export const getStaticProps = async () => {
  const allPosts = await GetAllPosts();
  return {
    props: {
      allPosts: allPosts,
    },
  };
};

interface BlogProps {
  allPosts: Post[];
}

const Posts = ({ allPosts }: BlogProps) => {
  return (
    <>
      <div className="bg-slate-100">
        <Navigation />
        <RenderAllPosts allPosts={allPosts} />
      </div>
    </>
  );
};
export default Posts;
