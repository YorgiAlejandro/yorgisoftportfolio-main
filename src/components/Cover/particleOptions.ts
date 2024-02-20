export const optionsParticles = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "rgb(255, 108, 0)",
      },
      links: {
        color: "rgb(255, 108, 0)",
        distance: 100,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: undefined,
        enable: true,
        random: true,
        speed: 0.5,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 3, max: 8 },
      },
    },
    detectRetina: true,
  };