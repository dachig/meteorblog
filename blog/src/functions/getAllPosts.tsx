
import { Post } from "@/types";
export const token =
  "2b4e588aa337ffa75e29188996528312438e25660823b240a18b354500aa16082919622c2cd28dd65f7ece6c4b371e928f0bc6c113402b1990e1391ff32b7126c6406e71cbef7be245086d86cc39f078763867ff51d59db3e882b11f8ee2df4153dd2fd3fe37201d2cb1dfb425e19c3a239b8beb0473395b46e47466a5706f4b";

export const GetAllPosts = async () => {
  const response = await fetch("http://localhost:1339/api/posts?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const allPosts: Post[] = data.data.map((value: any) => {
    return {
      id: value.id,
      title: value.attributes.title,
      description: value.attributes.description,
      author: value.attributes.author.data.attributes.name,
      publishedAt: value.attributes.publishedAt,
      category: value.attributes.category,
      media:
        value.attributes.media.data != null
          ? value.attributes.media.data.map((value: any) => {
              return {
                url: value.attributes.url,
                caption: value.attributes.caption,
              };
            })
          : null,
    };
  });

  return allPosts;
};



