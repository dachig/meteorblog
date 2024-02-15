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
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface LastPostProps {
  lastPost: Post;
}

const BlogPostDialog = ({ lastPost }: LastPostProps) => {
  return (
    <div className="p-5 lg:w-1/2 xl:w-1/3 mx-auto hover:scale-105 hover:-translate-y-5 duration-300">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col bg-slate-100 cursor-pointer">
            <Button variant="default">{lastPost.title}</Button>
            <span className="p-2 h-[250px]">
              {lastPost.description?.substring(0, 400)}...
            </span>
            <Button variant="outline">Read more</Button>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-fit">
          <DialogHeader>
            <DialogTitle>{lastPost.title}</DialogTitle>
            <DialogDescription>{lastPost.description}</DialogDescription>
          </DialogHeader>

          <Carousel>
            <CarouselContent>
              {lastPost.media?.map((image: any, index: number) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className=" bg-blue-200">
                        <Image
                          className="mx-auto pt-6"
                          src={image.url}
                          key={image.url}
                          alt="alt"
                          width={300}
                          height={400}
                        />
                        <span>{image.caption}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {lastPost.media?.length! > 1 && (
              <div>
                <CarouselPrevious />
                <CarouselNext />
              </div>
            )}
          </Carousel>

          <DialogFooter>
            <Link href="/about" className={buttonVariants({ variant: "link" })}>
              <h3 className="ml-10">written by {lastPost.author}</h3>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogPostDialog;
