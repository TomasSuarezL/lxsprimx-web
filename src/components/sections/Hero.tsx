import Image from "next/image";
import { Triangle } from "../../assets/Triangle";
import TriangleSVG from "/public/triangle.svg";

export const Hero = () => {
  return (
    <div
      className="relative  bg-slate-900 overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <div className="container relative mx-auto"> */}
      {/* <div className="items-center flex flex-wrap"> */}
      <div className="z-10 absolute top-0 left-0 w-full h-full px-4 ml-auto mr-auto text-center">
        {/* <Image src={TriangleSVG} alt="next" layout="fill" /> */}
        <Triangle />
      </div>
      <div className="absolute top-1/3 left-0 w-full px-4 ml-auto mr-auto text-center">
        <h1 className="text-sky-400 lg:text-9xl font-black">Negrx</h1>
      </div>
      <div className="absolute top-2/4 left-0 w-full font-black px-4 ml-auto mr-auto text-center">
        <h1 className="text-amber-300 lg:text-9xl">Putx</h1>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

