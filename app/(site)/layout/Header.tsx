"use client";
import Image from "next/image";
// import logo from "@/public/img/logo.svg";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Logo } from "./Logo";
// bg-base-100 shadow-md text-zinc-950"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Search Jobs",
    "Remote Jobs",
    "Blog",
  

  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}  isBordered>
    <NavbarContent className="sm:hidden" justify="start">
      <NavbarMenuToggle />
    </NavbarContent>

    <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
       <Logo w={200} h={50}/>
      {/* <Image src={logo} alt="Gulf Careerist" width="200" height="50" /> */}
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarBrand className="mr-20">
       <Logo w={225} h={50}/>
     
      </NavbarBrand>
      <NavbarItem isActive>
        <Link aria-current="page" color="warning" href="#">
        Search Jobs
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
         Remote Jobs
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
         Blog
        </Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent justify="end">
      <ThemeSwitcher/>
    </NavbarContent>

    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            href="#"
            // size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  );
};

export default Header;
{
  /* <div className="navbar bg-base-100 shadow-sm text-zinc-950">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href={'/'}>Home</Link></li>
      <li><a>About</a></li>
      <li><a>Remote Jobs </a></li>
      <li><Link href={'/blog'}>Blog</Link></li>
      <li><a>Privacy Policy</a></li>
    </ul>
  </div>
</div>
<div className="navbar-center">
  <span className="normal-case text-3xl text-sky-950"><Image src={logo} alt="Gulf Careerist" width="300" height="75" /></span>
</div>
<div className="navbar-end">

</div>
</div> */
}
