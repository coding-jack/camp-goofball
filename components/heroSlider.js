import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'


function HeroSlider() {
  const photos = [
    {
      label: 'Midnight',
      path: '/images/HeroSlider/1-Midnight.jpg',
    },
    {
      label: 'Crowd',
      path: '/images/HeroSlider/2-Crowd.jpg',
    },
    {
      label: 'Steve',
      path: '/images/HeroSlider/3-Steve.jpg',
    },
    {
      label: 'Amac',
      path: '/images/HeroSlider/4-Amac.jpg',
    },
    {
      label: 'Group Stage',
      path: '/images/HeroSlider/5-GroupStage.jpg',
    },
    {
      label: 'Massif',
      path: '/images/HeroSlider/6-Massif.jpg',
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
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
