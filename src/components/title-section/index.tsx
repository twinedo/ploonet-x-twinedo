import React from 'react'

const TitleSection = ({text}: {text: string}) => {
  return (
    <div className="flex flex-row items-start justify-center">
        <div className="h-2 w-2 md:w-4 md:h-4 bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] rounded-full" />
        <div className="text-white text-xl md:text-5xl font-bold">{text}</div>
      </div>
  )
}

export default TitleSection