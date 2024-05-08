import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { QUICK_LINKS, OUR_NEWS, CLIENT_SUPPORT } from "@/texts/footer";

const LINKS = [
  {
    id: 1,
    social: "https://www.facebook.com",
    image: <Facebook color="#00215B" />,
  },
  {
    id: 2,
    social: "https://www.linkedin.com",
    image: <Linkedin color="#00215B" />,
  },
  {
    id: 3,
    social: "https://www.youtube.com",
    image: <Youtube color="#00215B" />,
  },
  {
    id: 4,
    social: "https://www.twitter.com",
    image: <Twitter color="#00215B" />,
  },
];

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center">
        {/* Red Part */}
        <div className="bg-segRed w-full h-60 md:h-72 p-4 flex flex-col space-y-4 items-center">
          <Image
            className="w-auto h-auto"
            src={"/segadesh-white.png"}
            alt="logo"
            height={50}
            width={80}
          />
          <div className="flex flex-col items-center">
            <h3 className="uppercase text-white text-[8px] leading-relaxed">
              call us today
            </h3>
            <h3 className="text-[6px] md:text-xl font-bold leading-relaxed text-white">
              +234 8173054765
            </h3>
          </div>

          <div className="flex space-x-1 md:space-x-4 items-center">
            {LINKS.map((link) => (
              <div
                key={link.id}
                className="w-10 h-10 rounded-full bg-segGrey flex items-center justify-center"
              >
                <Link href={link.social}>{link.image}</Link>
              </div>
            ))}
          </div>

          <p className="text-white text-[4px] md:text-xs leading-relaxed">
            Committed to Excellence, Driven by Innovation
          </p>
        </div>

        {/* Blue Part */}
        <div className="bg-segBlue w-full h-60 md:h-72 px-4 py-8 items-center flex flex-col">
          <div className="w-auto flex space-x-3 lg:space-x-10 items-center">
            {/* Quick Links */}
            <div className="flex flex-col space-y-3 items-start h-auto self-start">
              <h2 className="capitalize text-white text-[6px] md:text-sm lg:text-lg leading-relaxed">
                quick links
              </h2>
              {QUICK_LINKS.map((link) => (
                <Link key={link.id} href={link.href}>
                  <h6 className="text-white text-[5px] md:text-[10px] lg:text-sm leading-relaxed font-medium">
                    {link.name}
                  </h6>
                </Link>
              ))}
            </div>

            {/* Client Support */}
            <div className="flex flex-col space-y-3 items-start h-auto self-start">
              <h2 className="capitalize text-white text-[6px] md:text-sm lg:text-lg leading-relaxed">
                client support
              </h2>
              {CLIENT_SUPPORT.map((link) => (
                <Link key={link.id} href={link.href}>
                  <h6 className="text-white text-[5px] md:text-[10px] lg:text-sm leading-relaxed font-medium">
                    {link.name}
                  </h6>
                </Link>
              ))}
            </div>

            {/* Our News */}
            <div className="flex flex-col space-y-3 items-start w-16 h-auto self-start md:w-32 lg:w-64">
              <h2 className="capitalize text-white text-[6px] md:text-sm lg:text-lg leading-relaxed">
                our news
              </h2>
              {OUR_NEWS.map((link) => (
                <Link key={link.id} href={link.href}>
                  <h6 className="text-white text-[5px] md:text-[10px] lg:text-sm leading-relaxed font-medium">
                    {link.title}
                  </h6>
                  <h6 className="text-white text-[5px] md:text-[10px] lg:text-sm leading-relaxed font-medium">
                    {link.date}
                  </h6>
                </Link>
              ))}
            </div>
          </div>
          <h6 className="my-5 text-white text-[4px] md:text-[8px] lg:text-[10px] leading-relaxed text-center self-center">
            Mubaraq &copy; Segadesh Template: All rights reserved Copyrights
            2024
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
