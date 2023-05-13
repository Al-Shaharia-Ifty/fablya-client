import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img2 from "../Assets/banner/slideshow_image_2.png";
import img3 from "../Assets/banner/slideshow_image_3.png";
import pic1 from "../Assets/banner/1.png";
import pic2 from "../Assets/banner/2.png";
import pic3 from "../Assets/banner/3.png";
import pic4 from "../Assets/banner/4.png";
import { Pagination, EffectCreative, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 grid-cols-2 2xl:mx-20 xl:mx-10 my-5 gap-4">
        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            // navigation={true}
            pagination={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay, Pagination]}
            className="mySwiper3 h-full w-full"
          >
            <SwiperSlide>
              <img src={img2} alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={img3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rounded-lg overflow-hidden banner-hover-animation bg-sky-300">
          <div className="p-8 pr-0 justify-between flex">
            <div className="w-1/2">
              <h2>BAST SALE</h2>
              <h4>Laptops Max</h4>
              <p>From $1499.00 or $64.62/mo.</p>
            </div>
            <img
              className="h-24 mr-[-10px] banner-animation duration-300"
              src={pic3}
              alt=""
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden banner-hover-animation bg-orange-200">
          <div className="p-8 pr-0 justify-between flex">
            <div className="w-1/2">
              <h2>NEW ARRIVAL</h2>
              <h4>Buy IPad Air</h4>
              <p>From $599.00 or $49.91/mo.</p>
            </div>
            <img
              className="h-24 mr-[-10px] banner-animation  duration-300"
              src={pic2}
              alt=""
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden banner-hover-animation bg-emerald-300">
          <div className="p-8 pr-0 justify-between flex">
            <div className="w-1/2">
              <h2>15% OFF</h2>
              <h4>Laptops Max</h4>
              <p>From $1499.00 or $64.62/mo.</p>
            </div>
            <img
              className="h-24 mr-[-10px] banner-animation  duration-300"
              src={pic1}
              alt=""
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden banner-hover-animation bg-yellow-200">
          <div className="p-8 pr-0 justify-between flex">
            <div className="w-1/2">
              <h2>FREE ENGRAVING</h2>
              <h4>Laptops Max</h4>
              <p>From $1499.00 or $64.62/mo.</p>
            </div>
            <img
              className="h-24 mr-[-10px] banner-animation  duration-300"
              src={pic4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//
