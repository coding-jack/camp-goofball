import React, { useEffect } from 'react'
import Image from 'next/image'
import goofGroup from '../assets/images/GoofGroup1.jpg'
import groupOne from '../assets/images/group.jpg'
import groupThree from '../assets/images/TSgroup3.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5 }, [Autoplay({delay: 7000})])
  useEffect(() => {
  if (emblaApi) {
    // Embla API is ready
  }
  }, [emblaApi])

  return (
    <div className="embla absolute w-full h-full z-10" ref={emblaRef}>
      <div className="embla__container w-full h-full">
        <div className="embla__slide h-full w-full">
          <Image
            className="slider-image"
            src={goofGroup}
            alt="Group Goof"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="slider-image"
            src={groupOne}
            alt="Group Goof"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="slider-image"
            src={groupThree}
            alt="Group Goof"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  )
}
