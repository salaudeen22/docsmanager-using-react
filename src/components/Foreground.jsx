import React from "react";
import Card from "./Card";

function Foreground() {
  return <div className="fixed top-0 left-0 w-full h-full z-[3]">
    <Card/>
    <Card/>
   
  </div>;
}

export default Foreground;
