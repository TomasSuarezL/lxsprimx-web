// @ts-nocheck
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: 10,
          color: ["#e09710", "#69bce0"],
          shape: {
            type: "square",
          },
          opacity: {
            value: 0.3,
            random: false,
            animation: {
              enable: true,
              speed: 0.09,
              minimumValue: 0,
              sync: false,
            },
          },
          size: {
            value: 80,
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
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        detectRetina: true,
        // emitters: {
        //   direction: "top",
        //   rate: {
        //     quantity: 10,
        //     delay: 0.2,
        //   },
        //   size: {
        //     width: 100,
        //     height: 10,
        //   },
        //   position: {
        //     x: 50,
        //     y: 100,
        //   },
        // },
      }}
    />
  );
};

