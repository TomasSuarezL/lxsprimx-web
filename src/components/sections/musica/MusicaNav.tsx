import Link from "next/link";
import { useRouter } from "next/router";

export const MusicaNav = () => {
  const router = useRouter();

  return (
    <nav className="z-50 pt-32 w-full flex flex-wrap items-center justify-between ">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex flex-wrap lg:flex-row list-none w-full justify-center">
          <li key="Tracks" className="flex items-center justify-center w-24 mx-2">
            <Link href="/musica/tracks">
              <a
                className={
                  (router.pathname === "/musica/tracks"
                    ? "border-amber-500 border-b-4 text-amber-500"
                    : "text-amber-500") +
                  " hover:text-sky-400 px-3 py-1 my-1 flex items-center text-base lg:text-2xl uppercase font-normal transition-colors duration-300"
                }
              >
                Tracks
              </a>
            </Link>
          </li>
          <li key="Sets" className="flex items-center justify-center w-24 mx-2">
            <Link href={"/musica/sets"}>
              <a
                className={
                  (router.pathname === "/musica/sets"
                    ? "border-amber-500 border-b-4 text-amber-500"
                    : "text-amber-500") +
                  " hover:text-sky-400 px-3 py-1 my-1 flex items-center text-base lg:text-2xl uppercase font-normal transition-colors duration-300"
                }
              >
                Sets
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

