/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FirstSlide from "./slides/FirstSlide";
import SecondSlide from "./slides/SecondSlide";
import ThirdSlide from "./slides/ThirdSlide";

function SliderContainer() {
  const slides: JSX.Element[] = [
    <FirstSlide />,
    <SecondSlide />,
    <ThirdSlide />,
  ];
  const [selectedSlide, setSelectedSlide] = useState<number>(1);

  useEffect(() => {
    if (selectedSlide < 1) {
      setSelectedSlide(slides.length);
    } else if (selectedSlide > slides.length) {
      setSelectedSlide(1);
    }
  }, [selectedSlide]);

  return (
    <div className="overflow-x-clip">
      <div
        className="relative min-w-screen transition-transform duration-300"
        style={{ transform: `translateX(-${selectedSlide * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const offsetLeft = (index + 1) * 100;

          if (selectedSlide === index + 1) {
            console.log(selectedSlide);
          }

          return (
            <div
              className={`absolute top-0 w-full`}
              style={{ left: `${offsetLeft}%` }}
            >
              {slide}
            </div>
          );
        })}
      </div>

      <div className="">
        <button
          className="absolute top-[50%] left-4 -translate-y-[50%]"
          onClick={() => setSelectedSlide((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="absolute top-[50%] right-4 -translate-y-[50%]"
          onClick={() => setSelectedSlide((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SliderContainer;
