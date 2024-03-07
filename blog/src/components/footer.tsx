import { Typography } from "@material-ui/core";
import { Button } from "../components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl border-t p-6 mx-auto ">
      <div className="flex flex-col gap-2">
        <Typography variant="h6" align="center">
          2023-2024 Dachi Giorgobiani AP Hogeschool
        </Typography>
        <div className="flex gap-10 justify-center items-center">
          <a href="./CVdocument.pdf" download>
            {" "}
            <Button className="px-8" variant="default" color="primary">
              Download CV
            </Button>
          </a>

          <Link target="_blank" href="https://github.com/dachig">
            <Button className="flex gap-2" variant="link">
              <img
                className=" rounded-full  border-black h-7 w-7"
                src="./github-mark.png"
                alt="github-logo"
              />
              github.com/dachig
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
