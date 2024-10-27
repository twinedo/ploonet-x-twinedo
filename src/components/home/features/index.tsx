import React, { useMemo } from "react";
import Coin from "./coin";

const HomeFeatures = () => {
  const coinMenu = useMemo(
    () => [
      {
        id: "1",
        title: "FAST",
        subtitle: "X2",
      },
      {
        id: "2",
        title: "QUALITY",
        subtitle: "A++",
      },
      {
        id: "3",
        title: "LOW PRICE",
        subtitle: "1/2",
      },
      {
        id: "4",
        title: "HIGH TECH",
        subtitle: "Gen AI",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col w-full bg-black md:px-[538px] md:pt-[157px] pt-[59px]">
      <div className="flex flex-col flex-1 items-center">
        <div className="hidden md:flex w-[110px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-2xl mb-[15px]">
          영상 제작소
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl text-center mb-[29px] md:mb-12 px-[41px]">
          당장 내일 <br className="md:hidden" />
          <span className="text-white font-bold">
            &apos;고품질 맞춤 영상&apos;
          </span>
          을 받아보세요.
        </div>
        <div className="flex flex-row">
          {coinMenu.map((item) => (
            <div key={item.id}>
              <Coin title={item.title} subtitle={item.subtitle} />
            </div>
          ))}
        </div>
        <div className="text-[18px] md:text-[32px] text-white text-center font-bold mt-[68px]">
          AI VIDEO ON YOUR DEMAND
        </div>
        <div className="hidden md:flex px-5 text-[16px] md:text-xl opacity-60 text-white text-center mt-[22px]">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
          기술에
          <br /> 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
          보장된 영상을 만듭니다.
          <br /> <br /> 가격은 절반으로, 속도는 두배로, 품질은 A++!
          <br />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br />{" "}
          당신이필요한 &apos;그 영상&apos;을 플루닛 영상제작소에 맡겨주세요.
        </div>
        <div className="flex md:hidden px-5 text-[16px] md:text-xl opacity-60 text-white text-center mt-[22px]">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등<br /> 국내 최고의 생성 AI
          기술에 영상 전문가의 터치를 더해<br /> 비용 및 시간은 절감하고 퀄리티는
          보장된 영상을 만듭니다.<br/><br /> 가격은 절반으로, 속도는 두배로, 품질은 A++!<br />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br /> 당신이 필요한
          &apos;그 영상&apos;을<br /> 플루닛 영상제작소에 맡겨주세요.
        </div>
        <div className="h-[1px] w-[240px] md:w-[800px] opacity-100 md:opacity-40 bg-gradient-to-r from-[#FFFFFF00] via-[#FFFFFF] to[#FFFFFF00] my-[38px] md:my-24" />
      </div>
    </div>
  );
};

export default HomeFeatures;
