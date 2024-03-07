import { Post } from "@/types";
import BlogPostDialog from "./postCard";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Meteors } from "./meteors";

interface AllPostsProps {
  allPosts: Post[];
}

const AllPosts = ({ allPosts }: AllPostsProps) => {
  const [allOptions, setAllOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [filteredAllPosts, setFilteredAllPosts] = useState<Post[]>(allPosts);

  useEffect(() => {
    // Use Set to store unique values
    const uniqueOptions = new Set(allPosts.map((option) => option.category));
    // Convert Set back to array
    const optionsCpy = [...Array.from(uniqueOptions), "clear"];
    setAllOptions(optionsCpy);
  }, []);

  function filterPosts(option: string) {
    if (option == "clear") {
        setFilteredAllPosts(allPosts.map((post) => post));
    } else {
        setFilteredAllPosts(
          allPosts.filter((post) => (post.category === option ? post : false))
        );

    }
  }

  return (
    <main className="flex flex-wrap gap-10 justify-center pt-24 sm:mx-6 md:mx-14 lg:mx-20 2xl:mx-64 mb-10">
      <Menu as="div" className="w-full text-center">
        <div className="-mb-6">
          <Menu.Button className="group inline-flex justify-center text-lg md:text-sm font-medium text-gray-700 hover:text-gray-900">
            Sort
            <ChevronDownIcon
              className="-mr-1 ml-1 mt-[4px] md:mt-0 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mx-auto right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2 flex flex-col">
              {allOptions.map((option: any) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <Button
                      onClick={() => filterPosts(option)}
                      variant={option == "clear" ? "outline" : "ghost"}
                    >
                      {option}
                    </Button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {filteredAllPosts.toReversed().map((post: any, index: number) => (
        <div className="p-2 -mb-10 sm:mb-0" key={index}>
          <BlogPostDialog lastPost={post} />
        </div>
      ))}
    </main>
  );
};

export default AllPosts;
