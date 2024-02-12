import { GetAllPosts } from "./getAllPosts";


export const GetLastPost = async () => {
  const allPosts = await GetAllPosts();
  const indexLastPost = allPosts.length - 1;
  const lastPostFiltered = allPosts.filter((value:any)=> indexLastPost == value.id && value);

  const lastPost = {
      id: lastPostFiltered[0].id,
      title: lastPostFiltered[0].title,
      description: lastPostFiltered[0].description,
      author: lastPostFiltered[0].author,
      publishedAt: lastPostFiltered[0].publishedAt,
      category: lastPostFiltered[0].category,
      media: lastPostFiltered[0].media
    };
  

  return lastPost;
};

export default GetLastPost;
