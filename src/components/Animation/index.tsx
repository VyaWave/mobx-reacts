import React from "react"
import Particles from "react-tsparticles";
import "./styles.css"


const Animation = () => {
  return (
			<Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance:100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                value_area:1000,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value:3,
            },
          },
          detectRetina: true,
        }}
      />
  )
}

export default Animation
