"use client";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import { headerLinks } from "~/constants/header";
import { ArrowUpIcon } from "~/icons";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

export const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header
      className="sticky md:hidden top-0 z-10 rounded-b-lg shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.05)]"
      data-open={isOpen}
      style={{
        ["--header-height" as string]: "calc(var(--spacing) * 20)",
      }}
    >
      <div className="h-[var(--header-height)] rounded-b-lg relative flex z-10 justify-between items-start bg-background p-5 tracking-[-0.08em] leading-[1.2]">
        <div className="font-secondary text-3xl">Area</div>
        <Hamburger
          easing="var(--ease-out-emil)"
          rounded
          distance="sm"
          toggle={setOpen}
          toggled={isOpen}
          color="var(--foreground)"
          size={24}
          duration={0.3}
        />
      </div>
      <nav
        className={cn(
          "z-0 rounded-b-lg shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.05)] absolute pt-8 px-5 pb-8 bg-background grid items-start gap-12 transition-transform duration-500 ease-out-emil top-[calc(var(--header-height)-3px)] left-0 right-0",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <ul className="text-link font-secondary font-bold">
          {headerLinks.map((link) => (
            <li key={link.id} className="py-7 border-t-2 border-divider">
              <a href={link.link} className="block w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          className="justify-self-start"
          variant={"primary"}
          type="button"
          size={"md"}
        >
          Learn More
          <ArrowUpIcon />
        </Button>
      </nav>
    </header>
  );
};
