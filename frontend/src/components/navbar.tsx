import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const BtnVariant = "default";
  const BtnSize = "lg";
  return (
    <div className="bg-cream-3 flex flex-row items-center justify-between px-7 border-b fixed w-[100%] z-50">
      <div className="flex flex-row items-center w-[40%] ">
        <div>
          <img height={65} width={65} alt="logo" src="/logo.svg" />
        </div>
        <div className="pl-6 flex gap-4">
          <Button
            className="hover:bg-cream-5 text-black font-semibold bg-cream-2 duration-400 rounded-[15px]"
            variant={BtnVariant}
            size={BtnSize}
          >
            Artworks
          </Button>
          <Button
            className="hover:bg-cream-5 text-black font-semibold bg-cream-2 duration-400 rounded-[15px]"
            variant={BtnVariant}
            size={BtnSize}
          >
            Products
          </Button>
          <Button
            className="hover:bg-cream-5 text-black font-semibold  bg-cream-2 duration-400 rounded-[15px]"
            variant={BtnVariant}
            size={BtnSize}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="pr-5 flex flex-row gap-6">
          <MdOutlineShoppingCart size={25} />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
