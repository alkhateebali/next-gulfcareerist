"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Logo } from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Search Jobs", "Blog"];
  return (
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href={"/"} title="home">
              <Logo w={200} h={50} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand className="mr-20">
            <Link href={"/"} title="home">
              <Logo w={200} h={50} />
            </Link>
          </NavbarBrand>
          <NavbarItem isActive>
            <Link aria-current="page" color="warning" href="/" className="link">
              Search Jobs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/blog" className="link">
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSwitcher />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full "
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={index === 0 ? "/" : "/blog"}
      
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

