import Link from "next/link";
import Image from "next/image";
import { ParticlesBackground } from "../../assets/Particles";
import { Triangle } from "../../assets/Triangle";

export const Home = () => {
  return (
    <>
      <Link href="/musica">
        <div className="triangle-container z-10 absolute -bottom-1/4 left-0 w-full h-[130%] ml-auto mr-auto text-center">
          <div className="background-container absolute w-full h-full -z-10">
            <ParticlesBackground />
          </div>
          {/* <Triangle /> */}
          <div className="absolute flex items-center flex-col justify-start top-32 2xl:top-40 left-0 w-full h-3/4 px-4 ml-auto mr-auto text-center">
            <div className="home-content flex flex-col items-center justify-center">
              <Image src="/Bola Amariiila.png" height={"258"} width="225" objectFit="cover"></Image>
              {/* <Image src="/Isologo 1.png" height={"528"} width="564" objectFit="cover"></Image> */}
              <h1 className="text-amber-500 md:text-6xl text-4xl 2xl:text-8xl font-black">LXS</h1>
              <h1 className="text-amber-500 md:text-6xl text-4xl 2xl:text-8xl font-black">PRIMXS</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

