import React from 'react'
import Image from 'next/image';

function HeroContent() {
  return (
    <div className="min-h-screen pt-16 pb-16 flex flex-1 flex-col justify-center items-center">
      <Image className="z-20" src="/placeholderIcon.png" alt="Camp Logo" width={172} height={160} />
      <h1 className="subheader z-20 text-white text-5xl">
        Camp Goofball 2022
      </h1>
    </div>
  )
}

export default HeroContent;
