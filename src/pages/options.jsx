export const option = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },

      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 0.1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3 },
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#000",
      opacity: 0.7,
      width: 1,
      triangles: {
        enable: true,
        color: "#ffffff",
        opacity: 0.1,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "out",
      random: false,
      straight: false,
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },

      repulse: {
        distance: 200,
        duration: 0.4,
      },

      push: {
        particles_nb: 4,
      },

      remove: {
        particles_nb: 2,
      },
    },
  },
  detectRetina: true,
  pauseOnOutsideViewport: true,
};
