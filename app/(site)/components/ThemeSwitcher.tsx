"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./icons/AppIcons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const selected = theme == "light" ? false : true;
  const selectedHandler=()=>{
    theme == "dark" ? setTheme('light') : setTheme('dark')
  }
  return (

    <Switch
    onChange={selectedHandler}
      defaultSelected={selected}
      size="sm"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      // startContent={<SunIcon />}
      // endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
  );
}
