import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'


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
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    draggable: false,
    swipe: false,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    slidesToScroll: 1
  }

  return (
    <div className="slider absolute w-full h-full z-10">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div className="h-full w-full" key={photo.label}>
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
      </Slider>
    </div>
  )
}

export default HeroSlider;
