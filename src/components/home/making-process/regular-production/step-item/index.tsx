import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { StepItemProps } from "./types";

const StepItem = (props: StepItemProps) => {
  const { data, index = 1, title = "", description = "" } = props;

  return (
    <div className="flex flex-col items-center px-5 relative md:bg-[#141414]">
      <div className="h-[97px] md:h-[103px] md:pl-[80px] md:pr-[53px] md:py-[23px] px-5 rounded-[15px] md:rounded-full border  border-[#FFFFFF26] flex flex-row gap-[50px] bg-[#141414] md:bg-[#00000033] justify-center items-center"> 
        <div className="flex flex-col flex-[0.5] justify-center">
          <div className="text-[12px] md:text-[16px] text-transparent bg-clip-text bg-gradient-to-br from-[#F05F82] to-[#FF7E7E]">
            STEP{index + 1}
          </div>
          <div className="w-full font-bold text-lg md:text-xl text-white">
            {title}
          </div>
        </div>
        <div className="flex flex-[1.5] text-[14px] md:text-[16px] color-[#AAAAAA] max-w-[207px] md:max-w-[316px]">
          {description}
        </div>
      </div>

      {index < data.length - 1 && (
        <TiArrowSortedDown
          color="#444444"
          size={30}
          className="absolute bottom-[-20px] left-1/2 right-0"
        />
      )}
    </div>
  );
};

export default StepItem;
