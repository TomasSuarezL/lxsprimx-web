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
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            center: {
              x: 50,
              y: 50,
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 0.065,
            straight: false,
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
              factor: 700,
            },
            limit: 0,
            value: 10,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: {
              min: 0.65,
              max: 0.75,
            },
          },
          reduceDuplicates: true,
          rotate: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 10,
            direction: "clockwise",
            path: true,
          },
          shape: {
            options: {
              images: [
                {
                  height: 419,
                  replaceColor: false,
                  src: "/1_1.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/2_1.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/3_1.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/4.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/5.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/6.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/7.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/8.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/9.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/91.png",
                  width: 419,
                },
                {
                  height: 419,
                  replaceColor: false,
                  src: "/92.png",
                  width: 419,
                },
              ],
            },
            type: "images",
          },
          size: {
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 130,
            animation: {
              count: 0,
              enable: false,
              speed: 10,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 100,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
};

