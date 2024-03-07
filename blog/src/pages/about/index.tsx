import Footer from "@/components/footer";
import Navigation from "@/components/header";
import { Container, Typography } from "@material-ui/core";
import Link from "next/link";
import { Button as ButtonLink, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        <Navigation />
        <main className="pt-24">
          <Container className="p-10 rounded-lg">
            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 rightToLeft">
              <div className="flex flex-col items-center">
                <Typography
                  className="p-2 text-indigo-600 rounded-lg hidden md:flex"
                  variant="h4"
                  align="left"
                >
                  About me
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  className="hidden md:flex max-w-[600px]"
                >
                  I'm Dachi Giorgobiani, a passionate web developer currently in
                  the final year of my programming studies at Artesis Plantijn
                  Hogeschool. With a fervent dedication to crafting seamless
                  online experiences, I'm on a mission to redefine the digital
                  landscape, one line of code at a time.
                </Typography>
              </div>
              <div className="w-[300px] h-[300px] mx-auto md:mx-0 mb-10">
                <Image
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/t_NEWPFP/ndsfvfqbzc8agdu7hh1r.jpg"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-stone-500" />
              </div>
              <div className="flex flex-col items-center">
                <Typography
                  className="p-2 text-indigo-600 rounded-lg flex md:hidden"
                  variant="h4"
                  align="left"
                >
                  About me
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  className="flex md:hidden max-w-[600px]"
                >
                  I'm Dachi Giorgobiani, a passionate web developer currently in
                  the final year of my programming studies at Artesis Plantijn
                  Hogeschool. With a fervent dedication to crafting seamless
                  online experiences, I'm on a mission to redefine the digital
                  landscape, one line of code at a time.
                </Typography>
              </div>
            </div>

            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 leftToRight">
              <div className="w-[300px] h-[300px] mx-auto md:mx-0 mb-10">
                <Image
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/v1709754441/g6u1khvkgoolj6qfaamd.jpg"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-indigo-600" />
              </div>

              <div className="flex flex-col items-center">
                <Typography
                  className="p-2 text-indigo-600 rounded-lg flex"
                  variant="h4"
                  align="center"
                >
                  My role at Meteor
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  align="center"
                  className="max-w-[600px] flex"
                >
                  At Meteor Digital NV, I'm currently spearheading the
                  development of a Progressive Web App (PWA) for our ecommerce
                  websites. By harnessing the latest advancements in web
                  technology, we're poised to revolutionize our company's
                  workflow, streamline processes, and deliver unparalleled value
                  to our clients. Additionally, I'm gearing up to lend my
                  expertise to upcoming client projects, where I'll continue to
                  push the envelope of innovation.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 rightToLeft">
              <div className="flex flex-col items-center">
                <Typography
                  className="p-2 text-indigo-600 rounded-lg hidden md:flex"
                  variant="h4"
                  align="left"
                >
                  Hobbies
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  className="hidden md:flex max-w-[600px]"
                >
                  Dedicated to English boxing & running, I prioritize strength &
                  agility. Calisthenics, a cherished component, hones my form.
                  Sci-fi novels fuel my imagination beyond the ring & track,
                  shaping a multifaceted pursuit of fitness & intellectual
                  exploration.
                </Typography>
              </div>
              <div className="w-[300px] h-[300px] mx-auto md:mx-0 mb-10">
                <Image
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/ar_1:1,c_crop/b6puhwrwitoperkpjpty.jpg"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-stone-500" />
              </div>
              <div className="flex flex-col items-center">
                <Typography
                  className="p-2 text-indigo-600 rounded-lg flex md:hidden"
                  variant="h4"
                  align="left"
                >
                  Hobbies
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  className="flex md:hidden max-w-[600px]"
                >
                  Dedicated to English boxing & running, I prioritize strength &
                  agility. Calisthenics, a cherished component, hones my form.
                  Sci-fi novels fuel my imagination beyond the ring & track,
                  shaping a multifaceted pursuit of fitness & intellectual
                  exploration.
                </Typography>
              </div>
            </div>
          </Container>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default About;
