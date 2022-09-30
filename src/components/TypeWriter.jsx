import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriterComponent() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Web Developer", "Mobile Developer", "Backend Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
