import Link from "next/link";
import { Triangle } from "../../assets/Triangle";

export const Home = () => {
  return (
    <>
      <Link href="/player">
        <div className="triangle-container z-10 absolute -bottom-1/3 left-0 w-full h-[150%] ml-auto mr-auto text-center">
          <div className="background-container absolute w-full h-full">{/* <Background /> */}</div>
          <Triangle />
          <div className="absolute flex items-center flex-col justify-center top-0 left-0 w-full h-3/4 px-4 ml-auto mr-auto text-center">
            <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">LXS</h1>
            <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">PRIMXS</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

