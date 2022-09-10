import Link from "next/link";
import Image from "next/image";
import { ParticlesElements } from "../../assets/Particles";

export const Home = () => {
  return (
    <>
      <Link href="/musica/tracks">
        <div className="hero-container z-10 absolute -bottom-1/4 left-0 w-full h-[130%] ml-auto mr-auto text-center">
          <div className="background-container absolute w-full h-full -z-10">
            <ParticlesElements />
          </div>
          <div className="absolute flex items-center flex-col justify-start top-32 2xl:top-40 left-0 w-full h-3/4 px-4 ml-auto mr-auto text-center">
            <div className="home-content flex flex-col items-center justify-center">
              <Image src="/Logo 2 Contorno.png" height="514" width="870" objectFit="cover"></Image>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
