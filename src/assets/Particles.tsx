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
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
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
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 80,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 0.1,
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          reduceDuplicates: false,
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: "vertical",
            speed: 25,
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shape: {
            options: {
              images: [
                {
                  height: 400,
                  replaceColor: false,
                  src: "/5B.png",
                  width: 600,
                },
                {
                  height: 400,
                  replaceColor: false,
                  src: "/8B.png",
                  width: 600,
                },
                {
                  height: 400,
                  replaceColor: false,
                  src: "/Isologo 1.png",
                  width: 400,
                },
                {
                  height: 400,
                  replaceColor: false,
                  src: "/Perfil Insta 1.png",
                  width: 400,
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
            value: 160,
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
          stroke: {
            width: 1,
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: 50,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
};

