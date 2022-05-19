import Link from "next/link";

export const HomeNav = () => {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-center px-2 py-6 ">
      <Link href="/">
        <a className="text-amber-500 hover:text-sky-400 px-3 py-4 flex items-center text-3xl uppercase font-bold transition-colors duration-300">
          Homx
        </a>
      </Link>
    </nav>
  );
};

