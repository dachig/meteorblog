import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface LastPostProps {
  lastPost: Post;
}

const BlogPostDialog = ({ lastPost }: LastPostProps) => {
  return (
    <article
      key={lastPost.id}
      className="flex max-w-xl flex-col items-start justify-between p-3 rounded-lg hover:bg-indigo-50 transition-all border"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <p className="text-gray-500">{lastPost.publishedAt.substring(0, 10)}</p>
        <p className="relative z-10 rounded-full bg-indigo-600 px-5 py-1 font-medium text-white">
          {lastPost.category}
        </p>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/posts/${lastPost.id}`}>
            <span className="absolute inset-0" />
            {lastPost.title}
          </Link>
        </h3>
        <Link href={`/posts/${lastPost.id}`}>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
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
          className="h-10 w-10 rounded-full object-cover border-indigo-500 border-2"
        />
        <div className="text-sm leading-6 hover:border-b hover:border-indigo-500 transition-all">
          <p className="font-semibold text-gray-900 ">
            <Link href="/about">
              <span className="absolute inset-0" />
              {lastPost.author}
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDialog;
