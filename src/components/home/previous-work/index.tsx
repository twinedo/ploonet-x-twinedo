import TitleSection from "@/components/title-section";
import React, { useMemo } from "react";
import Image1 from "@/assets/images/01.png";
import Image2 from "@/assets/images/02.png";
import Image3 from "@/assets/images/03.png";
import Image4 from "@/assets/images/04.png";
import Image5 from "@/assets/images/05.png";
import Image6 from "@/assets/images/06.png";
import Image7 from "@/assets/images/07.png";
import Image8 from "@/assets/images/08.png";
import Image9 from "@/assets/images/09.png";
import Image10 from "@/assets/images/10.png";
import Image11 from "@/assets/images/11.png";
import Image12 from "@/assets/images/12.png";
import Image from "next/image";

const HomePreviousWork = () => {
  const dataWorks = useMemo(
    () => [
      {
        id: "1",
        image: Image1,
        title: "AI Pick 이모저모 차트쑈",
        subtitle: "SK Btv",
      },
      {
        id: "2",
        image: Image2,
        title: "KIMES 전시 안내영상",
        subtitle: "비트컴퓨터",
      },
      {
        id: "3",
        image: Image3,
        title: "감성컴퓨팅 메타휴먼 강의",
        subtitle: "상명대학교",
      },
      {
        id: "4",
        image: Image4,
        title: "AI Pick 돈되는 정보",
        subtitle: "SK Btv",
      },
      {
        id: "5",
        image: Image5,
        title: "제품 소개 영상 (영문)",
        subtitle: "옵투스제약",
      },
      {
        id: "6",
        image: Image6,
        title: "사용자 가이드 스크립트 작성 Tip",
        subtitle: "플루닛 스튜디오",
      },
      {
        id: "7",
        image: Image7,
        title: "당진 도서관 개관 행사 영상",
        subtitle: "당진시립도서관",
      },
      {
        id: "8",
        image: Image8,
        title: "플루닛 워크센터 사용 가이드",
        subtitle: "플루닛 워크센터",
      },
      {
        id: "9",
        image: Image9,
        title: "인재개발원 아카데미 교육 영상",
        subtitle: "롯데인재개발원",
      },
      {
        id: "10",
        image: Image10,
        title: "우리동네알파고 방송",
        subtitle: "엘지헬로비전",
      },
      {
        id: "11",
        image: Image11,
        title: "AI스타트업-창업경진대회-본선개막식",
        subtitle: "AICA",
      },
      {
        id: "12",
        image: Image12,
        title: "시상식 시상식",
        subtitle: "Alvogen",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col w-full items-center gap-[60px]">
      <TitleSection text="PREVIOUS WORKS" />
      <div className="grid grid-cols-4 w-full">
        {dataWorks.map((item) => (
          <div key={item.id} className="relative">
            <Image
              src={item.image}
              width={undefined}
              height={270}
              alt={item.id}
            />
            <div className="cursor-pointer absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold">
                {item.title}
              </span>
              <span className="text-white text-lg font-semibold">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePreviousWork;
