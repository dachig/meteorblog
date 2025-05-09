import { Post } from "@/types";
import { GetAllPosts } from "./getAllPosts";

export const GetLastPost = async () => {
  const allPosts = await GetAllPosts();
  const indexLastPost = allPosts.length;
  const lastPostFiltered = allPosts.filter(
    (value: any) => indexLastPost == value.id - 19 && value
  );
  const lastPost: Post = {
    id: lastPostFiltered[0].id,
    title: lastPostFiltered[0].title,
    description: lastPostFiltered[0].description,
    author: lastPostFiltered[0].author,
    publishedAt: lastPostFiltered[0].publishedAt,
    category: lastPostFiltered[0].category,
    media: lastPostFiltered[0].media,
  };

  return lastPost;
};

export default GetLastPost;
