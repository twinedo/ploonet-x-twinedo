import React from "react";
import { CoinProps } from "./types";

const Coin = (props: CoinProps) => {
  const { title, subtitle } = props;
  return (
    <div className="w-[85px] h-[85px] md:w-[211px] md:h-[211px] rounded-full flex flex-col items-center justify-center relative bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
      <div className="bg-[#141414] w-[84px] h-[84px] md:w-[210px] md:h-[210px] rounded-full flex flex-col items-center justify-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-[16px] md:text-[32px] flex justify-center items-center text-center">
          {title}
        </div>
        <div className="hidden md:flex text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-medium md:text-2xl justify-center items-center opacity-60">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Coin;
