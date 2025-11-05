import { headerLinks } from "~/constants/header";
import { ArrowUpIcon } from "~/icons";
import { Button } from "../ui/button";

export const WebHeader = () => {
  return (
    <header className="hidden md:flex justify-between items-center fluid-container pt-4 pb-17">
      <div className="font-secondary text-3xl py-5">Area</div>
      <Button className="py-5" variant={"primary"} type="button" size={"md"}>
        Learn More
        <ArrowUpIcon />
      </Button>
      <nav className="fixed z-10 flex pointer-events-none justify-center items-center right-0 left-0 mx-auto">
        <ul className="text-link backdrop-blur-[30px] pointer-events-auto font-secondary rounded-4xl font-bold flex py-5 px-6 gap-7">
          {headerLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="hover:text-primary-light">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
