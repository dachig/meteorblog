import BlogPostDialog from "@/components/blogPostDialog";
import Navigation from "@/components/header";
import GetLastPost from "@/functions/getLastPost";
import { Post } from "@/types";

export const getStaticProps = async () => {
  const lastPost = await GetLastPost();
  return {
    props: {
      lastPost: lastPost,
    },
  };
};

interface HomeProps {
  lastPost: Post;
}

const Home = ({ lastPost }: HomeProps) => {
  return (
    <>
      <Navigation />
      <BlogPostDialog lastPost={lastPost} />
    </>
  );
};
export default Home;
