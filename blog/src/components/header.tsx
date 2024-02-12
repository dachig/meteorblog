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
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3 bg-slate-100">
      <NavigationMenu>
        <NavigationMenuList>
              <Link href="/" className={buttonVariants({ variant: "link", size:"lg" })}>
                  Home
              </Link>

            <Link href="/posts" className={buttonVariants({ variant: "link",size:"lg" })}>
                Blog
            </Link>

              <Link href="/about" className={buttonVariants({ variant: "link",size:"lg" })}>
                  About
              </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
