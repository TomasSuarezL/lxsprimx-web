import Link from "next/link";
import Image from "next/image";

export const HomeNav = () => {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-center px-2 py-6 bg-black">
      <Link href="/">
        <a className="my-3 h-12 flex items-center">
          <Image src="/5B.png" layout="fill" objectFit="contain"></Image>
        </a>
      </Link>
    </nav>
  );
};

