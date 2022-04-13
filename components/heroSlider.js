import React, { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


function HeroSlider() {
    const photos = [
    {
      label: 'Midnight',
      path: '/images/heroSlider/1-Midnight.jpg',
    },
    {
      label: 'Crowd',
      path: '/images/heroSlider/2-Crowd.jpg',
    },
    {
      label: 'Steve',
      path: '/images/heroSlider/3-Steve.jpg',
    },
    {
      label: 'Amac',
      path: '/images/heroSlider/4-Amac.jpg',
    },
    {
      label: 'Group Stage',
      path: '/images/heroSlider/5-GroupStage.jpg',
    },
    {
      label: 'Massif',
      path: '/images/heroSlider/6-Massif.jpg',
    },
  ];
  const carouselOptions = {
    loop: true,
    speed: 5,
    draggable: false
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [Autoplay({delay: 7000})])
  useEffect(() => {
  if (emblaApi) {
    // Embla API is ready
  }
  }, [emblaApi])

  return (
    <div className="embla absolute w-full h-full z-10" ref={emblaRef}>
      <div className="embla__container w-full h-full">
        {photos.map((photo) => (
          <div className="embla__slide h-full w-full" key={photo.label}>
            <Image
              className="slider-image"
              src={photo.path}
              alt={photo.label}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider;
