import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface LastPostProps {
  lastPost: Post;
}

const BlogPostDialog = ({ lastPost }: LastPostProps) => {
  return (
    <div className="p-5 lg:w-1/2 xl:w-1/3 mx-auto">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col bg-slate-100 cursor-pointer">
              <Button variant="default">{lastPost.title}</Button>
              <span className="p-2 h-[250px]">{(lastPost.description)?.substring(0,400)}...</span> 
              <Button variant="outline">Read more</Button>
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-fit">
            <DialogHeader>
              <DialogTitle>{lastPost.title}</DialogTitle>
              <DialogDescription>{lastPost.description}</DialogDescription>
            </DialogHeader>
            <div className="mx-auto">
              {lastPost.media?.map((image: any) => (
                <Image src={image.url} alt="images" height={500} width={500} />
              ))}
            </div>
            <DialogFooter>
              <Link
                href="/about"
                className={buttonVariants({ variant: "link" })}
              >
                <h3 className="ml-10">written by {lastPost.author}</h3>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default BlogPostDialog;
