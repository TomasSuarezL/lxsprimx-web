import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { text: "Bix", href: "/bio" },
  { text: "Musicx", href: "/musica" },
  { text: "Videxs", href: "/videos" },
  { text: "Redxs", href: "/redes" },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bottom-0 absolute z-50 w-full shadow-l flex flex-wrap items-center justify-between px-2 py-6 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex flex-col lg:flex-row list-none w-full justify-around">
          {links.map((l) => (
            <li key={l.href} className="flex items-center">
              <Link href={l.href}>
                <a
                  className={
                    (router.pathname === l.href ? "text-sky-400" : "text-amber-500") +
                    " hover:text-sky-400 px-3 py-4 flex items-center text-4xl uppercase font-bold transition-colors duration-300"
                  }
                >
                  {l.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

