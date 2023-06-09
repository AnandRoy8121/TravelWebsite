import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/Go";

const Testimonial = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlide((slide) => (slide === Images.length - 1 ? 0 : slide + 1));
    }, 10000);
  }, []);

  const Images = [
    {
      review:
        "Booking my vacation through this travel website was a game-changer! The user-friendly interface made it easy to find and compare the best deals. I had a stress-free experience and the customer support was exceptional. Highly recommended!",
      user: "Emily R",
    },
    {
      review:
        "I have been using this travel website for years, and it never disappoints. The extensive range of destinations and accommodation options is impressive. Their attention to detail and personalized recommendations have made my trips unforgettable. Thank you for making travel planning a breeze!",
      user: "Michael S",
    },
    {
      review:
        "I stumbled upon this travel website while searching for a last-minute getaway. The incredible discounts and exclusive deals amazed me. The booking process was quick and secure, and I was able to embark on an amazing adventure without breaking the bank. I'll definitely be a returning customer!",
      user: "Sarah D",
    },
    {
      review:
        "Planning a family vacation can be overwhelming, but this travel website made it a breeze. The intuitive search filters helped us find family-friendly resorts and activities tailored to our needs. The website's comprehensive travel guides and tips ensured we didn't miss any hidden gems. Our family vacation was a resounding success!",
      user: "John M",
    },
    {
      review:
        "As a frequent traveler, I've used several travel websites, but this one stands out from the rest. The user interface is sleek and modern, and the search results are accurate and up-to-date. The customer reviews and ratings provided valuable insights for making informed decisions. Trustworthy and reliable, this travel website has become my go-to platform for all my travel needs.",
      user: "Lisa W",
    },
  ];

  const slideLeft = () => {
    const isFirst = slide === 0;
    const currentSlide = isFirst ? Images.length - 1 : slide - 1;
    setSlide(currentSlide);
  };

  const slideRight = () => {
    const isLast = slide === Images.length - 1;
    const currentSlide = isLast ? 0 : slide + 1;
    setSlide(currentSlide);
  };
  return (
    <div className="w-full md:w-1/2 m-auto py-6 px-4 relative group mt-5 bg-white shadow-xl rounded-md">
      <div className="flex flex-col gap-2 w-full h-full rounded-2xl">
        <p className="text-gray-500 font-semibold sm:text-sm">{Images[slide].review}</p>
        <p className="text-right text-gray-700 font-bold sm:text-sm">
          -<span>{Images[slide].user}</span>
        </p>
      </div>
      <div className="absolute top-[25%] -translate-x-0 -translate-y-[-50%] ease-in left-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700">
        <MdKeyboardArrowLeft size={30} onClick={slideLeft} />
      </div>
      <div className="absolute top-[25%] -translate-x-0 -translate-y-[-50%] ease-out right-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700">
        <MdKeyboardArrowRight size={30} onClick={slideRight} />
      </div>
      {/* <div className="flex top-4 justify-center p-2">
        {Images.map((slide, slideIndex) => (
          <div
            className="cursor-pointer"
            key={slideIndex}
            onClick={() => setSlide(slideIndex)}
          >
            <GoPrimitiveDot size={20} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonial;
