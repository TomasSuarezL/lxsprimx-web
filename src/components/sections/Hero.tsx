import { Triangle } from "../../assets/Triangle";
import { ParticlesBackground } from "../../assets/Particles";

export const Hero = () => {
  return (
    <div
      className="relative bg-slate-900 overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <div className="container relative mx-auto"> */}
      {/* <div className="items-center flex flex-wrap"> */}
      <ParticlesBackground />
      <div className="triangle-container z-10 absolute -bottom-1/3 left-0 w-full h-[150%] px-4 ml-auto mr-auto text-center">
        {/* <Image src={TriangleSVG} alt="next" layout="fill" /> */}
        <Triangle />
        <div className="absolute top-1/3 left-0 w-full px-4 ml-auto mr-auto text-center">
          <h1 className="text-sky-400 text-6xl lg:text-9xl font-black">Lxs</h1>
          <h1 className="text-amber-300 text-6xl lg:text-9xl font-black">Primxs</h1>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

