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
    <div className="p-5 lg:w-1/2 xl:w-1/3 mx-auto hover:scale-105 hover:-translate-y-5 duration-300 mt-6">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col bg-blue-100 cursor-pointer rounded-md">
            <Button variant="default">{lastPost.title}</Button>
            <span className="p-5 h-[250px]">
              {lastPost.description?.substring(0, 325)}...
            </span>
            <Button variant="outline" className="hover:bg-white">
              Read more
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className={`${lastPost.media ? 'max-w-[1200px]' : 'max-w-[600px]'} ${lastPost.description.length > 1300 ? 'max-w-[1300px]' : 'max-w-[1000px]'}`}>
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
                      <CardContent className="pt-6">
                        <div className="relative w-auto h-[300px] md:h-[450px] lg:h-[550px] flex flex-col mx-auto">
                          <Image
                            className="object-cover"
                            alt={image.url}
                            src={image.url}
                            key={image.url}
                            fill
                          />
                          <span className="text-center text-muted-foreground mt-auto z-30 bg-blue-50 py-3 px-8 border-[2px] border-blue-500 mx-auto mb-6 rounded-md">
                            {image.caption}
                          </span>
                        </div>
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
              <h3 className="ml-10"><span>written by {lastPost.author}</span> on {lastPost.publishedAt.substring(0,10)}</h3>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogPostDialog;
