import Footer from "@/components/footer";
import Navigation from "@/components/header";
import Link from "next/link";
import { Button as ButtonLink, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        <Navigation />
        <main className="max-w-7xl mx-auto pt-24">
          <div className="p-10 rounded-lg">
            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 leftToRight1">
              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-md text-left text-indigo-600 rounded-lg hidden md:flex">
                  About me
                </h2>
                <p
                  color="textSecondary"
                  className="hidden md:flex max-w-[600px]"
                >
                  I'm Dachi Giorgobiani, a passionate web developer currently in
                  the final year of my programming studies at Artesis Plantijn
                  Hogeschool. With a fervent dedication to crafting seamless
                  online experiences, I'm on a mission to redefine the digital
                  landscape, one line of code at a time.
                </p>
              </div>
              <div className="z-50 w-[300px] h-[300px] mx-auto md:mx-0 mb-10">
                <Image
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/t_NEWPFP/ndsfvfqbzc8agdu7hh1r.jpg"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-stone-500" />
              </div>
              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-indigo-600 rounded-lg flex md:hidden">
                  About me
                </h2>
                <p
                  color="textSecondary"
                  className="flex md:hidden max-w-[600px]"
                >
                  I'm Dachi Giorgobiani, a passionate web developer currently in
                  the final year of my programming studies at Artesis Plantijn
                  Hogeschool. With a fervent dedication to crafting seamless
                  online experiences, I'm on a mission to redefine the digital
                  landscape, one line of code at a time.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 leftToRight2">
              <div className="z-50 w-[300px] h-[300px] mx-auto md:mx-0 mb-10">
                <Image
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/v1709754441/g6u1khvkgoolj6qfaamd.jpg"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-indigo-600" />
              </div>

              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-indigo-600 rounded-lg flex">
                  My role at Meteor
                </h2>
                <p color="textSecondary" className="max-w-[600px] flex">
                  At Meteor Digital NV, I'm currently spearheading the
                  development of a Progressive Web App (PWA) for our ecommerce
                  websites. By harnessing the latest advancements in web
                  technology, we're poised to revolutionize our company's
                  workflow, streamline processes, and deliver unparalleled value
                  to our clients. Additionally, I'm gearing up to lend my
                  expertise to upcoming client projects, where I'll continue to
                  push the envelope of innovation.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 leftToRight3">
              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-indigo-600 rounded-lg hidden md:flex">
                  Hobbies
                </h2>
                <p
                  color="textSecondary"
                  className="hidden md:flex max-w-[600px]"
                >
                  Dedicated to English boxing & running, I prioritize strength &
                  agility. Calisthenics, a cherished component, hones my form.
                  Sci-fi novels fuel my imagination beyond the ring & track,
                  shaping a multifaceted pursuit of fitness & intellectual
                  exploration.
                </p>
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
                <h2 className="p-2 text-indigo-600 rounded-lg flex md:hidden">
                  Hobbies
                </h2>
                <p
                  color="textSecondary"
                  className="flex md:hidden max-w-[600px]"
                >
                  Dedicated to English boxing & running, I prioritize strength &
                  agility. Calisthenics, a cherished component, hones my form.
                  Sci-fi novels fuel my imagination beyond the ring & track,
                  shaping a multifaceted pursuit of fitness & intellectual
                  exploration.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
