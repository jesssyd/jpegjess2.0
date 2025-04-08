"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  height?: number;
}

function NextArrow({ className,onClick }: ArrowProps) {
  return (
    <div
      className={className}
      onClick={onClick}
    >

      
    </div>
  );
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      onClick={onClick}
    >
  
    </div>
  );
}


// function NextArrow({ className, style, onClick, height }) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         top: height ? `${height / 2}px` : "50%", // Center based on image height
//         transform: "translateY(-50%)",
//       }}
//       onClick={onClick}
//     >
//       <img src={next} alt="Next" className="h-full" />
//     </div>
//   );
// }

// function PrevArrow({ className, style, onClick, height }) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         top: height ? `${height / 2}px` : "50%", // Center based on image height
//         transform: "translateY(-50%)",
//       }}
//       onClick={onClick}
//     >
//       <img src={prev} alt="Previous" className="h-full" />
//     </div>
//   );
// }

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

  return (
    <div className="slider-container col-start-2 col-span-4 lg:col-start-2 lg:col-span-10">
      <Slider {...settings}>
        {/* {images.map((image, index) => (
          <div key={index}>
            <img
              src={"src/assets/images/" + image.fileName}
              alt={image.alt}
              className="galleryImage relative"
            />
            <p>{image.date}</p>
            <p className="caption">{image.caption}</p>
          </div>
        ))} */}
      </Slider>
    </div>
  );
}

export default function Carousel() {
  return (
    <section id="gallery">
      <div className="section page-container columns ">
        <h2 className="col-start-2 col-span-4 lg:col-start-2 lg:col-span-10">
          gallery
        </h2>
        <Slides />
      </div>
    </section>
  );
}
