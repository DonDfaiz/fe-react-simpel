import React, { Component } from "react";

import ParticlesBg from "particles-bg";

class Particle extends Component {
  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random", "#363477"],
      cross: "dead",
      // emitter: "follow",
      random: 15,
      g: "1",
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        },
      });
    }

    return (
      <div>
        <ParticlesBg type="cobweb" config={config} bg={true} />
      </div>
    );
  }
}

export default Particle;
