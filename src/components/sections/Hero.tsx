import { Background } from "../../assets/Background";
import { Triangle } from "../../assets/Triangle";

export const Home = () => {
  return (
    <>
      <div className="triangle-container z-10 absolute -bottom-1/3 left-0 w-full h-[150%] ml-auto mr-auto text-center">
        <div className="background-container absolute w-full h-full">
          <Background />
        </div>
        <Triangle />
        <div className="absolute top-1/3 left-0 w-full px-4 ml-auto mr-auto text-center">
          <h1 className="text-sky-400 text-6xl lg:text-9xl font-black">Lxs</h1>
          <h1 className="text-amber-500 text-6xl lg:text-9xl font-black">Primxs</h1>
        </div>
      </div>
    </>
  );
};

