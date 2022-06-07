import Link from "next/link";
import { ParticlesBackground } from "../../assets/Particles";
import { Triangle } from "../../assets/Triangle";

export const Home = () => {
  return (
    <>
      <Link href="/player">
        <div className="triangle-container z-10 absolute -bottom-1/4 left-0 w-full h-[130%] ml-auto mr-auto text-center">
          <div className="background-container absolute w-full h-full">
            <ParticlesBackground />
          </div>
          <Triangle />
          <div className="absolute flex items-center flex-col justify-center top-12 left-0 w-full h-3/4 px-4 ml-auto mr-auto text-center">
            <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">LXS</h1>
            <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">PRIMXS</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

