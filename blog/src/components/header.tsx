import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

export const Navigation = () => {
  return (
    <div className="py-3 bg-gradient-to-b from-blue-200">
      <NavigationMenu className="">
        <NavigationMenuList className="w-screen flex justify-around">
          <div>
            <Link
              href="/"
              className={buttonVariants({ variant: "link", size: "lg" })}
            >
              Meteor Internship 2024
            </Link>
          </div>
          <div>
            <Link
              href="/posts"
              className={buttonVariants({ variant: "link", size: "lg" })}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={buttonVariants({ variant: "link", size: "lg" })}
            >
              About
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
