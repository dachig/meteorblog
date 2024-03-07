import Footer from "@/components/footer";
import Navigation from "@/components/header";
import AllPosts from "@/components/postCardGrid";
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
      <div className="">
        <Navigation />
        <AllPosts allPosts={allPosts} />
        <Footer/>
      </div>
    </>
  );
};
export default Posts;
