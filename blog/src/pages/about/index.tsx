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
                <h2 className="p-2 text-md text-left text-blue-600 rounded-lg hidden md:flex">
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
                <h2 className="p-2 text-blue-600 rounded-lg flex md:hidden">
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
                  src="https://res.cloudinary.com/dzass4sf0/image/upload/v1739303364/thumbnail_twintag_Logo_40ed17c950.png"
                  alt="about-me-collage"
                  height={300}
                  width={300}
                  className="absolute z-10 rounded-full shadow-xl shadow-black"
                />
                <div className="absolute rounded-full translate-x-8 translate-y-3 w-[300px] h-[300px] bg-blue-600" />
              </div>

              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-blue-600 rounded-lg flex">
                  My role at Twintag
                </h2>
                <p color="textSecondary" className="max-w-[600px] flex">
                  As a Frontend Web Developer at Twintag, I focus on delivering
                  exceptional user experiences by creating dynamic, intuitive,
                  and responsive web interfaces for client projects. I
                  collaborate closely with design and backend teams to implement
                  tailored solutions that meet client needs, leveraging modern
                  frameworks and technologies to ensure seamless functionality.
                  Beyond client work, I actively contribute to internal
                  innovation by developing AI-powered assistant tools that
                  enhance productivity and streamline workflows. My role
                  requires balancing creativity, technical expertise, and
                  problem-solving to drive impactful digital solutions while
                  staying ahead of industry trends to deliver cutting-edge user
                  experiences for clients and internal initiatives.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row md:gap-20 mb-10 leftToRight3">
              <div className="z-50 flex flex-col items-center">
                <h2 className="p-2 text-blue-600 rounded-lg hidden md:flex">
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
                <h2 className="p-2 text-blue-600 rounded-lg flex md:hidden">
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
