import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { id: 1, name: "Home", href: "/" as const },
  { id: 2, name: "Services", href: "services" as const },
  { id: 3, name: "About Us", href: "about-us" as const },
  { id: 4, name: "Projects", href: "projects" as const },
  { id: 5, name: "Contacts", href: "contacts" as const },
];

const Navbar = () => {
  return (
    <div className="mx-auto my-auto p-5 hidden md:flex flex-row items-center justify-between lg:max-w-screen-xl">
      <Link className="w-full flex flex-row items-center" href={"/"}>
        <Image src={"/segadesh.png"} alt="logo" height={50} width={120} />
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
  );
};

export default Navbar;
