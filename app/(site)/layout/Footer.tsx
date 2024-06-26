import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Telegram } from "./FooterIcons";

export const Footer = () => {
  return (
    <footer className="flex  flex-col  flex-wrap  items-center justify-center text-center p-10 bg-default-50  gab-4">
      <nav className="flex flex-nowrap  gap-4 py-1">
        <Link className="link " href={"/"}>
          Search Jobs
        </Link>
        <Link className="link " href={"/blog"}>
          Blog
        </Link>
        <Link className="link " href={"/contact-us"}>
          Contact us
        </Link>
        <Link className="link " href={"/privacy-policy"}>
          Privacy Policy
        </Link>
      </nav>
      <nav>
        <div className="flex gap-4 py-4">
          <Facebook link="https://www.facebook.com/gulfcareerist" />
          <LinkedIn link="https://www.linkedin.com/company/" />
          <Instagram link="https://www.instagram.com/" />
          <Telegram link="https://t.me/" />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Gulf Careerist</p>
      </aside>
    </footer>
  );
};
