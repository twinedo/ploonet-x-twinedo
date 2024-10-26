import React from "react";
import { CoinProps } from "./types";

const Coin = (props: CoinProps) => {
  const { title, subtitle } = props;
  return (
    <div className="w-[211px] h-[211px] rounded-full flex flex-col items-center justify-center relative bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
      <div className="bg-[#141414] w-[210px] h-[210px] rounded-full flex flex-col items-center justify-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-[32px] flex justify-center items-center">
          {title}
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-medium text-2xl flex justify-center items-center opacity-60">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Coin;
