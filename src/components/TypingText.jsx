import React from "react";
import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <div className="d-flex justify-content-center fw-semibold ">
      <TypeAnimation
        sequence={[
          "SIMPEL - ",
          1000,
          "SIMPEL - Sistem",
          1000,
          "SIMPEL - Sistem Informasi ",
          1000,
          "SIMPEL - Sistem Informasi Manajemen ",
          1000,
          "SIMPEL - Sistem Informasi Manajemen Penelitian",
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        speed={50}
        cursor={true}
        repeat={0}
        style={{ fontSize: "3em", display: "inline-block" }}
      />
    </div>
  );
}

export default Typing;
