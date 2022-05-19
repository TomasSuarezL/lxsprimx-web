// @ts-nocheck
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: 12,
          color: ["#e09710", "#69bce0"],
          shape: {
            type: "square",
          },
          opacity: {
            value: 0.25,
            random: false,
            animation: {
              enable: true,
              speed: 0.09,
              minimumValue: 0,
              sync: false,
            },
          },
          size: {
            value: 90,
            random: { enable: true, minimumValue: 40 },
            animation: {
              enable: false,
              speed: 1,
              minimumValue: 50,
              sync: false,
            },
          },
          move: {
            angle: {
              value: 45,
              offset: 0,
            },
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            size: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

