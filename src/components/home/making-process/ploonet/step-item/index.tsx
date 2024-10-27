import React from "react";
import type { StepItemProps } from "./types";

const StepItem = (props: StepItemProps) => {
  const { index = 0, title = "", description = "", icon, data } = props;
  return (
    <div className="flex flex-1 flex-row gap-10 items-center">
      <div className="w-[82px] h-[82px] md:w-[134px] md:h-[134px] rounded-[19px] md:rounded-[20px] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] flex flex-col items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="text-white text-[12px] md:text-lg">STEP{index}</div>
        <div className="w-[25px] md:w-[40px] h-[31px] md:h-[31px]">{icon}</div>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="text-lg md:text-2xl text-white font-bold">{title}</div>
        <div className="text-[14px] md:text-lg text-[#CCCCCC] font-medium">{description}</div>

        <div
          className={`h-[1px] w-full mt-3 md:mt-5 ${
            index <= data.length - 1 && "bg-[#FFFFFF15]"
          } `}
        />
      </div>
    </div>
  );
};

export default StepItem;
