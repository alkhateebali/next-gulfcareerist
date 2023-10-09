import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Telegram } from "./FooterIcons";

export const Footer = () => {
  return (
    <footer className="flex  flex-col items-center justify-center text-center p-10 bg-default-100 gab-4">
      <nav className="flex  gap-4 py-1">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Remote Jobs</a>
        <Link className="link link-hover" href={'/blog'}>Blog</Link>
        <a className="link link-hover">Privacy Policy</a>
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
