import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/texts/navbar";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto my-auto p-5 hidden md:flex flex-row items-center justify-between lg:max-w-screen-xl">
        <Link className="w-full flex flex-row items-center" href={"/"}>
          <Image
            src={"/segadesh.png"}
            alt="logo"
            height={50}
            width={120}
            className="w-auto h-auto"
          />
        </Link>
        <div className="w-full flex flex-row items-center md:space-x-3 lg:space-x-5">
          {LINKS?.map((link) => (
            <Link
              key={link.id}
              className="md:text-sm lg:text-lg text-segBlue leading-relaxed"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
