import React from "react";
import IcArrowDown from "@/assets/images/arrow-down.svg";
import Image from "next/image";
import { IoMdCheckmarkCircle } from "react-icons/io";

const HomeForm = () => {
  return (
    <div className="flex flex-col w-full bg-black mx-auto pt-[103px] md:pt-[300px]">
      <div className="flex flex-col flex-1 items-center px-5 md:px-0">
        <div className="w-[102px] md:w-[136px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-lg md:text-2xl mb-[15px]">
          영상 제작 문의
        </div>
        <div className="w-[217px] md:[690px] text-2xl md:text-4xl lg:text-5xl text-center mb-12">
          <span className="text-white font-bold">영상 제작이 필요하다면,</span>
          지금 문의 주세요.
        </div>
        <div className="font-bold text-[16px] md:text-2xl text-white opacity-60 leading-6 md:leading-8 text-center mt-[16px] md:mt-[38px]">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가
          <br /> 즉시 연락 드리겠습니다.
        </div>
        <div className="md:hidden flex text-[16px] leading-[25px] font-bold mt-[30px] text-[#666666]">
          E-MAIL
        </div>
        <div className="text-[#666666] mb-[58px]">henry.lim@saltlux.com</div>
        <div className="flex w-full max-w-[901px] flex-col gap-5 items-center">
          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[66px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              placeholder="영상 유형 선택"
            />
            <Image src={IcArrowDown} width={20} height={10} alt="ic-down" />
          </div>

          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[66px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              placeholder="연락 받으실 담당자 성함"
            />
          </div>
          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[66px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              placeholder="이메일"
            />
          </div>
          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[66px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              placeholder="휴대폰 번호"
            />
          </div>
          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[278px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              multiple
              placeholder={`의뢰하실 영상내용 아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요,${(
                <br />
              )} 고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등
영상 장르 : 홍보,프로모션/IR/프레젠테이션 등
내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.`}
            />
          </div>
          <div className="flex flex-row items-center justify-between border border-[#FFFFFF26] max-w-[901px] h-[66px] w-full px-[40px] bg-[#141414] rounded-[10px] ">
            <input
              className="outline-none flex flex-1 h-full w-full bg-transparent text-xl font-bold leading-6 text-[20px]"
              placeholder="휴대폰 번호"
            />
          </div>
          <div className="flex flex-row text-[#FF6D51] text-start w-full gap-3">
            <span>*</span> 참고할만한 영상이나 원하시는 영상과 유사한 영상의
            링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.
          </div>
          <div className="mt-[147px] mb-[59px] md:mb-[326px] w-full flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-row gap-5 w-full justify-start items-center cursor-pointer mb-[60px] md:mb-0">
              <IoMdCheckmarkCircle
                size={28}
                color="white"
                className="opacity-20"
              />
              <div className="text-xl leading-8 text-white opacity-60">
                개인정보처리방침에 동의합니다.
              </div>
            </div>
            <div className="md:w-[145px] h-[64px] rounded-lg bg-[#FF6D51] w-full flex justify-center items-center font-bold text-xl cursor-pointer hover:bg-black">
              문의 보내기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
