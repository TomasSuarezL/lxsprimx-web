import Image from "next/image";
import { Background } from "../../assets/Background";
import { Triangle } from "../../assets/Triangle";

export const Home = () => {
  return (
    <>
      <div className="triangle-container z-10 absolute -bottom-1/3 left-0 w-full h-[150%] ml-auto mr-auto text-center">
        <div className="background-container absolute w-full h-full">{/* <Background /> */}</div>
        <Triangle />
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-3/4 px-4 ml-auto mr-auto text-center">
          {/* <h1 className="text-sky-400 text-6xl lg:text-9xl font-black">Lxs</h1>
          <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">Primxs</h1> */}
          <div className="h-96 w-[32rem]">
            <Image src="/Isologo 1.png" height={700} width={700} objectFit="cover"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

