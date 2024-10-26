import React from "react";
import { NavbarTitleProps } from "./type";

const NavbarTitle = (props: NavbarTitleProps) => {
  const { text, selected } = props;
  return (
    <div className="flex flex-col gap-2 items-center cursor-pointer">
      <div className={`font-bold text-base hover:opacity-100 text-white ${!selected && 'opacity-60'}` }>{text}</div>
      <div
        className={
          selected
            ? "w-2 h-2 bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] rounded-full"
            : "w-2 h-2 bg-transparent"
        }
      />
    </div>
  );
};

export default NavbarTitle;
