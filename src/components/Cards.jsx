import React from "react";
import { CiMemoPad } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { FaCloudArrowDown } from "react-icons/fa6";
import { motion, useSpring } from "framer-motion";
const Cards = ({ data,referance }) => {
  return (
    <motion.div  drag dragConstraints={referance} className="relative  w-60 h-70 rounded-[30px] bg-zinc-900/50 text-white p-5 overflow-hidden">
      <CiMemoPad />
      <p className="mt-4 leading-tight ">{data.desc}</p>
      <div className="flex justify-between item-center mt-10 py-10 ">
        <h3 className="font-semibold ">{data.size}</h3>
        <span className="py-1">
          {data.close ? <FaCloudArrowDown /> : <ImCancelCircle />}
        </span>
      </div>

      {data.tag.isOpen&&<div
        className={`footer absolute bottom-0 flex justify-center font-semibold rounded-bottom-full left-0 ${
          data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
        } w-full p-4`}
      >
        <h3>{data.tag.tagTitle}</h3>
      </div>}
    </motion.div>
  );
};

export default Cards;
