import React, { useRef } from "react";
import Cards from "./Cards";
import { motion, useSpring } from "framer-motion";

const Foreground = () => {
    const ref= useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },{
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },{
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },{
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    }
  ];
  return (
    <div ref={ref} className="fixed flex gap-5 flex-wrap mt-5 top-0 left-0 w-full h-full z-[3] ">
      {data.map((item,index)=>(
        <Cards data={item} referance={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
