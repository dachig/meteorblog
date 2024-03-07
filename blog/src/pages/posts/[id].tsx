import Navigation from "@/components/header";
import GetSpecificPost from "@/functions/getSpecificPost";
import { Post } from "@/types";
import { GetServerSidePropsContext } from "next";
import SpecificPost from "@/components/specificPost";
import Footer from "@/components/footer";

export const getStaticPaths = async () => {
  const token =
    "2b4e588aa337ffa75e29188996528312438e25660823b240a18b354500aa16082919622c2cd28dd65f7ece6c4b371e928f0bc6c113402b1990e1391ff32b7126c6406e71cbef7be245086d86cc39f078763867ff51d59db3e882b11f8ee2df4153dd2fd3fe37201d2cb1dfb425e19c3a239b8beb0473395b46e47466a5706f4b";
  const responseId = await fetch("http://localhost:1339/api/posts?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await responseId.json();
  const paths = await data.data.map((value: any) => {
    return {
      params: {
        id: value.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  console.log(id);
  const specificPost = await GetSpecificPost(id as string);
  console.log(specificPost);
  return {
    props: {
      specificPost: specificPost,
    },
  };
};

interface BlogIdProps {
  specificPost: Post;
}

const Posts = ({ specificPost }: BlogIdProps) => {
  return (
    <>
      <div className="">
        <Navigation />
        <SpecificPost specificPost={specificPost} />
        <Footer/>
      </div>
    </>
  );
};
export default Posts;
