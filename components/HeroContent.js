import React from 'react'
import Image from 'next/image';
import Link from 'next/link'


function HeroContent() {
  return (
    <div className="min-h-screen pt-16 pb-16 flex flex-1 flex-col justify-center items-center">
      <Image className="z-20" src="/placeholderIcon.png" alt="Camp Logo" width={172} height={160} />
      <h1 className="subheader z-20 text-white text-7xl">
        Camp Goofball 2022
      </h1>
      <div className="z-20 mt-10">
        <Link href={`#lineup`}>
          <a className="z-20 btn-secondary mr-10" href="#lineup">Lineup</a>
        </Link>
        <a className="z-20 btn-primary" href="https://www.eventbrite.com/e/camp-goofball-tickets-320413233607">Tickets</a>
      </div>
    </div>
  )
}

export default HeroContent;
