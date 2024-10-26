import React from "react";
import { StepItemProps } from "./types";

const StepItem = (props: StepItemProps) => {
  const { index = 0, title = "", description = "", icon, data } = props;
  return (
    <div className="flex flex-1 flex-row items-center gap-10">
      <div className="w-[134px] h-[134px] rounded-[20px] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] flex flex-col items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="text-white text-lg">STEP{index}</div>
        <div>{icon}</div>
      </div>
      <div className="flex flex-col gap-3 max-w-[400px]">
        <div className="text-2xl text-white font-bold">{title}</div>
        <div className="text-lg text-[#CCCCCC] font-medium">{description}</div>

        <div
          className={`h-[1px] w-full mt-5 ${
            index <= data.length - 1 && "bg-[#FFFFFF15]"
          } `}
        />
      </div>
    </div>
  );
};

export default StepItem;
