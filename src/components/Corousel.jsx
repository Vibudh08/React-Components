import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Corousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesData = [
    "https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/10/12/07/32/measuring-cups-9889151_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/29/01/13/sea-7486268_1280.jpg",
  ];
  return (
    <div>
      <div className="w-full h-[300px] relative bg-gray-200">
        <img
          className="absolute h-[300px] w-full"
          src={imagesData[currentIndex]}
          alt=""
        />
        <div className="flex justify-between top-[45%] px-5 relative">
          <div
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + imagesData.length) % imagesData.length
              )
            }
            className="bg-white rounded-full cursor-pointer hover:bg-black hover:text-white select-none"
          >
            <IoIosArrowBack size={25} />
          </div>
          <div
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % imagesData.length)
            }
            className="bg-white rounded-full cursor-pointer hover:bg-black hover:text-white select-none"
          >
            <IoIosArrowForward size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Corousel;
