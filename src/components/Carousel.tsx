"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  height?: number;
}

interface Image {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  alt?: string;
}

function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <ChevronRight size={20} strokeWidth={1.5} color="#000000" className="md:size-7 lg:size-9" />
    </div>
  );
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
     <ChevronLeft size={20} color="#000000" strokeWidth={1.5} className="flex justify-center md:size-7 lg:size-9"/>
    </div>
  );
}

function Slides() {
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data);
    }

    fetchImages();
  }, []);

  // if (!images.length) return <p>Loading gallery...</p>;
  return (
    <div className="slider-container col-start-2 col-span-4 lg:col-start-2 lg:col-span-10 2xl:col-start-2 2xl:col-span-10">
      <Slider {...settings}>
        {images.map((img) => (
          <Image
            key={img.public_id}
            src={img.secure_url}
            alt={img.public_id}
            width={img.width}
            height={img.height}
            className=""
          />
        ))}
      </Slider>
    </div>
  );
}

export default function Carousel() {
  return (
    <section id="gallery">
      <div className="section page-container columns ">
        <h2 className="col-start-2 col-span-4 lg:col-start-2 lg:col-span-10 2xl:col-start-2 2xl:col-span-10">
          gallery
        </h2>
        <Slides />
      </div>
    </section>
  );
}
