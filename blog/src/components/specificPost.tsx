import { Post } from "@/types";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { CardHeader, Grid } from "@material-ui/core";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { Meteors } from "./meteors";

interface SpecificPostProps {
  specificPost: Post;
}

const SpecificPost = ({ specificPost }: SpecificPostProps) => {
  return (
    <div className="flex flex-col items-center p-2 pt-24 lg:px-40 xl:px-72 2xl:px-96">
      {specificPost.media?.length! > 0 && (
        <div className="w-full relative max-w-5xl mx-auto border-[1px] border-gray-300 rounded-2xl">
          <Carousel
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] p-10 rounded-lg"
            navButtonsAlwaysVisible={
              specificPost.media?.length! <= 1 ? false : true
            }
            navButtonsProps={{
              style: { backgroundColor: "mediumslateblue" },
            }}
            animation="slide"
            indicators={specificPost.media?.length! <= 1 ? false : true}
            indicatorIconButtonProps={{
              style: { backgroundColor: "mediumslateblue", margin: "5px" },
            }}
            autoPlay={false}
          >
            {specificPost.media?.map((image: any, index) => (
              <Image
                className="object-contain"
                key={index}
                src={image.url}
                alt="images"
                fill={true}
              />
            ))}
          </Carousel>
          {/* Meaty part - Meteor effect */}
        </div>
      )}
      <div className="mx-auto my-5">
        <Card className="flex flex-col rounded-3xl border-t-[1px] border-r-[1px] border-l-[1px] border-gray-300">
          <CardHeader
            avatar={
              <Link href="/about">
                <Avatar className="border-2 border-primary" aria-label="recipe">
                  <Image
                    src="https://res.cloudinary.com/dzass4sf0/image/upload/v1707067666/thumbnail_avatar_Meteor_830ed94696.jpg"
                    alt="avatar"
                    fill={true}
                    className="object-cover"
                  />
                </Avatar>
              </Link>
            }
            title={specificPost.title}
            titleTypographyProps={{ style: { fontSize: "20px" } }}
            subheader={specificPost.publishedAt.substring(0, 10)}
          />

          <CardContent className="max-w-xl">
            <Typography variant="body1" color="darkslategray">
              {specificPost.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpecificPost;
