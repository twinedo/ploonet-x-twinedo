import React, { useMemo } from "react";
import StepItem from "./step-item";
import IcDoc from '@/assets/images/ic-doc.svg';
import IcCam from '@/assets/images/ic-camera.svg';
import IcVideo from '@/assets/images/ic-video.svg';
import Image from "next/image";

const Ploonet = () => {
    const dataPloonet = useMemo(() => [
        {
            id: '1',
            title: '제작 안내',
            description: '영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내',
            icon: <Image src={IcDoc} width={40} height={51} alt="ic-doc" />
        },
        {
            id: '2',
            title: '영상 생성',
            description: '스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성',
            icon: <Image src={IcCam} width={40} height={51} alt="ic-doc" />
        },
        {
            id: '3',
            title: '편집 및 납품',
            description: '편집 진행, 12~48시간 내 최종본 완성 및 납품',
            icon: <Image src={IcVideo} width={40} height={51} alt="ic-cam" />
        },
    ], [])
  return (
    <div className="flex flex-1 flex-col rounded-[20px] p-[3px] max-w-[780px] max-h-[816px] justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#FF4E83] to-[#FFBB54]">
      <div className="rounded-[20px] h-full w-full md:pt-16 md:px-[100px] bg-[#141414] flex items-center flex-col">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-[44px]">
          Ploonet Quickserve™
        </div>
        <div className="font-bold text-[#FFFFFF] text-center text-2xl mb-[50px]">
          제작 시작 후 12~48시간 이내
        </div>
        <div className="flex flex-col gap-10">
            {dataPloonet.map((item, index) => (
                <div key={item.id} className="flex flex-1">
                    <StepItem title={item.title} description={item.description} index={index+1} icon={item.icon} data={dataPloonet} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Ploonet;