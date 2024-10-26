import React, { useMemo, useState } from "react";
import Logo from "@/assets/images/logo-text.png";
import Image from "next/image";
import NavbarTitle from "./title";
import { FaSortDown } from "react-icons/fa6";
import IcWorld from "@/assets/images/ic-world.svg";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const menu = useMemo(
    () => [
      {
        id: "1",
        name: "스튜디오",
        link: "/스튜디오",
      },
      {
        id: "2",
        name: "워크센터",
        link: "/워크센터",
      },
      {
        id: "3",
        name: "손비서",
        link: "/손비서",
      },
      {
        id: "4",
        name: "메타휴먼",
        link: "/메타휴먼",
      },
      {
        id: "5",
        name: "영상제작소",
        link: "/영상제작소",
      },
      {
        id: "6",
        name: "공지사항",
        link: "/공지사항",
      },
      {
        id: "7",
        name: "제휴문의",
        link: "/제휴문의",
      },
    ],
    []
  );

  const [selectedMenu, setSelectedMenu] = useState("스튜디오");
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="flex w-full h-[100px] bg-[#000000] md:py-9 justify-center">
      <div className="flex flex-1 flex-row max-w-[1600px] px-5 items-center md:items-start justify-between">
        <Image src={Logo} width={170} height={28} alt="logo" className="hidden md:flex" />
        <Image src={Logo} width={121} height={20} alt="logo" className="flex md:hidden" />
        <div className="hidden md:flex flex-row items-center justify-between flex-1 max-w-[872px]">
          {menu.map((item) => (
            <div key={item.id} onClick={() => setSelectedMenu(item.name)}>
              <NavbarTitle
                text={item.name}
                selected={selectedMenu === item.name}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-row gap-[55px] items-center">
          <div className="text-base font-bold text-white">로그인</div>
          <div className="flex flex-row items-center gap-2">
            <Image src={IcWorld} width={20} height={20} alt="world" />
            <FaSortDown size={18} color="white" />
          </div>
        </div>
        <div className="relative">
          <IoMenu
            size={24}
            color="white"
            className="cursor-pointer flex md:hidden"
            onClick={() => setIsShowMenu(!isShowMenu)}
          />
          {isShowMenu ? (
            <div className="absolute right-5 top-5 p-5 flex z-10 w-[200px] flex-col rounded-lg bg-[#141414]">
              {menu.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedMenu(item.name);
                  }}
                >
                  <NavbarTitle
                    text={item.name}
                    selected={selectedMenu === item.name}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
