import React from "react";

export const Navbar = (props: { transparent: boolean }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="bottom-0 absolute z-50 w-full shadow-l flex flex-wrap items-center justify-between px-2 py-6 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex flex-col lg:flex-row list-none w-full justify-around">
          <li className="flex items-center">
            <a
              className="text-amber-400 hover:text-sky-400 px-3 py-4 py-2 flex items-center text-4xl uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
            >
              Bix
            </a>
          </li>
          <li className="flex items-center">
            <a
              className="text-amber-400 hover:text-sky-400 px-3 py-4 lg:py-2 flex items-center text-4xl uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
            >
              Musicx
            </a>
          </li>
          <li className="flex items-center">
            <a
              className="text-amber-400 hover:text-sky-400 px-3 py-4 lg:py-2 flex items-center text-4xl uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
            >
              Videxs
            </a>
          </li>
          <li className="flex items-center">
            <a
              className="text-amber-400 hover:text-sky-400 px-3 py-4 lg:py-2 flex items-center text-4xl uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
            >
              Redxs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

