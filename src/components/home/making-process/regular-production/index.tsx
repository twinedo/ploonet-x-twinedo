import React, { useMemo } from "react";
import StepItem from "./step-item";

const RegularProduction = () => {
  const data = useMemo(
    () => [
      {
        id: "1",
        title: "사전 논의",
        description:
          "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
      },
      {
        id: "2",
        title: "영상 기획",
        description:
          "스토리보드 전달&수정을 통한 기획안 확정 가상인간 발화용 스크립트 작성과 프롬프팅",
      },
      {
        id: "3",
        title: "영상 생성 ",
        description:
          "작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
      },
      {
        id: "4",
        title: "영상 편집",
        description:
          "영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성",
      },
      {
        id: "5",
        title: "최종 납품",
        description:
          "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col max-w-[780px] max-h-[816px] rounded-[20px] md:border md:border-[#FFFFFF26] md:bg-[#141414] md:px-[93px] md:py-[64px] jutify-center items-center">
      <div className="text-[22px] md:text-[44px] font-bold text-[#D9D9D9]">일반 제작</div>
      <div className="text-[16px] font-bold md:font-normal md:text-2xl text-[#DDDDDD] mb-[17px] md:mb-[18px]">
        제작 시작 후 5영업일 이내
      </div>
      <div className="flex flex-col gap-6">
        {data &&
          data.map((item, index) => (
            <div key={item.id}>
              <StepItem
                title={item.title}
                description={item.description}
                index={index}
                data={data}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RegularProduction;
