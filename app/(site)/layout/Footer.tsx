import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Telegram } from "./FooterIcons";

export const Footer = () => {
  return (
    <footer className="flex  flex-col items-center justify-center text-center p-10 bg-default-100 gab-4">
      <nav className="flex  gap-4 py-1">
        <Link href={'/'}>Search Jobs</Link>
        <Link  href={'/blog'}>Blog</Link>
        <Link  href={"/contact-us"}>Contact us</Link>
        <Link  href={'/privacy-policy'}>Privacy Policy</Link>
      </nav>
      <nav>
        <div className="flex gap-4 py-4">
          <Facebook link="https://www.facebook.com/gulfcareerist"/>
          <LinkedIn link="https://www.linkedin.com/company/gulf-careerist/"/>
          <Instagram link="https://www.instagram.com/gulfcareerist/"/>
          <Telegram link="https://t.me/gulfcareerist_bot"/>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Gulf Careerist</p>
      </aside>
    </footer>
  );
};
