import Image from "next/image";
import React, { useMemo } from "react";

const importImages = {
  one: "/images/grid-images/Frame 1597884900.png",
  two: "/images/grid-images/Frame 1597884897.png",
  three: "/images/grid-images/Frame_1597884861-removebg-preview.png",
  four: "/images/grid-images/Frame 1597884863.png",
  five: "/images/grid-images/Frame 1597884899 (1).png",
  six: "/images/grid-images/Frame 1597884854.png",
  seven: "/images/grid-images/Frame 1597884864.png",
  eight: "/images/grid-images/Frame 1597884871.png",
  nine: "/images/grid-images/Frame 1597884867.png",
  ten: "/images/grid-images/Frame 1597884856.png",
  eleven: "/images/grid-images/Frame 1597884857.png",
  twelve: "/images/grid-images/Frame 1597884868.png",
  thirteen: "/images/grid-images/Frame 1597884860.png",
  fourteen: "/images/grid-images/Frame 1597884852.png",
  fifteen: "/images/grid-images/Frame 1597884902.png",
  sixteen: "/images/grid-images/Frame 1597884859.png",
  seventeen: "/images/grid-images/17.png",
  eighteen: "/images/grid-images/18.png",
  nineteen: "/images/grid-images/19.png",
  twenty: "/images/grid-images/Frame 1597884853.png",
  twentyone: "/images/grid-images/Frame 1597884903.png",
  twentytwo: "/images/grid-images/Frame 1597884906.png",
  twentythree: "/images/grid-images/Frame 1597884905.png",
  twentyfour: "/images/grid-images/Frame 1597884872.png",
};

const ImageRow = React.memo(({ images, direction }: { images: string[]; direction: "right" | "left" }) => (
  <div className={`flex whitespace-nowrap ${direction === "right" ? "animate-marquee-right" : "animate-marquee-left"}`}>
    {[...images, ...images].map((img, index) => (
      <div key={index} className="inline-block">
        <div className="w-[150px] h-[150px] md:w-48 md:h-48 overflow-hidden">
          <Image src={img} height={200} width={200} alt={`Slide ${index}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    ))}
  </div>
));

ImageRow.displayName = "ImageRow";

const SlidingImages = () => {
  const imageRows = useMemo(() => {
    const images = Object.values(importImages);
    return [images.slice(0, 12), images.slice(12, 24)];
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="block">
        {imageRows.map((row, index) => (
          <ImageRow key={`row-${index}`} images={row} direction={index % 2 === 0 ? "right" : "left"} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlidingImages);
