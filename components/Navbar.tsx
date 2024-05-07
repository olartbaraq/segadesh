import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Hammer,
  Factory,
  MessageCircleMore,
} from "lucide-react";

export const LINKS = [
  { id: 1, name: "Home", href: "/" as const, icon: <Home color="#00215B" /> },
  {
    id: 2,
    name: "Services",
    href: "/services" as const,
    icon: <Hammer color="#00215B" />,
  },
  {
    id: 3,
    name: "About",
    href: "/about" as const,
    icon: <Factory color="#00215B" />,
  },
  {
    id: 4,
    name: "Projects",
    href: "/projects" as const,
    icon: <Briefcase color="#00215B" />,
  },
  {
    id: 5,
    name: "Contacts",
    href: "/contacts" as const,
    icon: <MessageCircleMore color="#00215B" />,
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto my-auto p-5 flex flex-row items-center justify-between lg:max-w-screen-xl">
          <Link className="w-full flex flex-row items-center" href={"/"}>
            <Image
              src={"/segadesh.png"}
              alt="logo"
              height={50}
              width={120}
              className="w-20 h-10 md:w-auto md:h-auto"
            />
          </Link>
          <div className="w-full hidden md:flex flex-row items-center md:space-x-3 lg:space-x-5">
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

          <div className="w-full md:hidden flex flex-row items-center space-x-4">
            {LINKS?.map((link) => (
              <Link
                key={link.id}
                className="text-segBlue leading-relaxed"
                href={link.href}
              >
                <div className="flex flex-col space-y-1 items-center">
                  {link.icon}
                  <h3 className="text-[8px] text-segRed text-center">
                    {link.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-full h-auto block md:hidden">
        <section
          className={cn(
            `w-full h-auto block md:hidden mx-auto my-auto p-5 ${
              navbarOpen ? "bg-slate-700 mix-blend-multiply" : "bg-transparent"
            }`
          )}
        >
          <div className="sticky w-full flex p-5 justify-center items-center">
            <div className="flex items-start flex-grow">
              <Image
                src={cn(
                  `${navbarOpen ? "/segadesh-white.png" : "/segadesh.png"}`
                )}
                alt="site_logo"
                height={70}
                width={70}
              />
            </div>

            <div className="flex items-start">
              <button
                className="border rounded-lg outline-none focus:border-black"
                onClick={() => setNavBar((prev) => !prev)}
              >
                {navbarOpen ? (
                  <X
                    className={cn(
                      "h-10 w-10 invert transition-all text-muted-foreground"
                    )}
                  />
                ) : (
                  <Menu
                    className={cn(
                      "h-10 invert w-10 transition-all text-muted-foreground"
                    )}
                  />
                )}
              </button>
            </div>
          </div>

          {navbarOpen ? (
            <div className="w-full">
              <div
                className={cn(
                  "w-full py-10 flex flex-row space-x-1 items-center"
                )}
              >
                {LINKS.map((links) => (
                  <ul key={links.id}>
                    <Link
                      className="text-white hover:py-3 px-10 hover:border hover:rounded-3xl hover:bg-black hover:text-white"
                      href={links.href}
                      onClick={() => setNavBar((prev) => !prev)}
                    >
                      {links.name}
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-transparent"></div>
          )}
        </section>
      </div> */}
    </>
  );
};

export default Navbar;
