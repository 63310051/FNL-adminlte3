import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cookies",
          "Cheese Cake",
          "Peach Cobbler",
          "Brownies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
    
    
  );
}

export default Type;