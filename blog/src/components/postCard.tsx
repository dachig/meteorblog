import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Meteors } from "./meteors";

interface LastPostProps {
  lastPost: Post;
}

const BlogPostDialog = ({ lastPost }: LastPostProps) => {
  return (
    <div className="md:hover:scale-105 duration-200 transition-all">
      <div className=" w-full relative max-w-xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-50 to-indigo-900 transform scale-[0.80] bg-indigo-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         
          <div className="z-50">
            <div className="flex items-center gap-x-4 text-xs">
              <p className="text-gray-400">
                {lastPost.publishedAt.substring(0, 10)}
              </p>
              <p className="relative z-10 rounded-full bg-indigo-600 px-5 py-1 font-medium text-white">
                {lastPost.category}
              </p>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/posts/${lastPost.id}`}>
                  <span className="absolute inset-0" />
                  {lastPost.title}
                </Link>
              </h3>
              <Link href={`/posts/${lastPost.id}`}>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
                  {lastPost.description}
                </p>
              </Link>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image
                src="https://res.cloudinary.com/dzass4sf0/image/upload/v1707067666/thumbnail_avatar_Meteor_830ed94696.jpg"
                alt=""
                width={25}
                height={25}
                className="h-10 w-10 rounded-full object-cover border-white border-2"
              />
              <div className="text-sm leading-6 hover:border-b hover:border-gray-400 transition-all">
                <p className="font-semibold text-gray-400 ">
                  <Link href="/about">
                    <span className="absolute inset-0" />
                    {lastPost.author}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostDialog;
