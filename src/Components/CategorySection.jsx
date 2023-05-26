import React from "react";
import img1 from "../Assets/banner/12.png";
import img2 from "../Assets/banner/13.png";
import img3 from "../Assets/banner/14.png";
import img4 from "../Assets/banner/15.png";
import img5 from "../Assets/banner/16.png";
import img6 from "../Assets/banner/17.png";
import img7 from "../Assets/banner/18.png";
import img8 from "../Assets/banner/19.png";
// import img9 from "../Assets/banner/10.png";
// import img10 from "../Assets/banner/11.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="bg-slate-100 pb-10">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aso-delay="500"
        className="bg-white py-10 px-5 2xl:mx-20 xl:mx-10 mx-5 "
      >
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/mens_panjabi"}>
              <div className="relative overflow-hidden">
                <img
                  src={img1}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Mens Panjabi</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-200 rounded-lg min-h-[250px] relative">
            <Link to={"category/womens_kurti"}>
              <div className="relative overflow-hidden">
                <img
                  src={img2}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Womens Kurti</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/womens_3pcs"}>
              <div className="relative overflow-hidden">
                <img
                  src={img3}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Womens 3 PCS</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/boys_collection"}>
              <div className="relative overflow-hidden">
                <img
                  src={img4}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Boys Collection</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/girls_collection"}>
              <div className="relative overflow-hidden">
                <img
                  src={img5}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Girl Collection</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/mens"}>
              <div className="relative overflow-hidden">
                <img
                  src={img6}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Mens</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/womens"}>
              <div className="relative overflow-hidden">
                <img
                  src={img7}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>Womens</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-stone-300 rounded-lg min-h-[250px] relative">
            <Link to={"category/kids"}>
              <div className="relative overflow-hidden">
                <img
                  src={img8}
                  alt="category"
                  className="hover:scale-125 duration-300"
                />
                <div className="absolute bottom-14 bg-white p-2 2xl:left-32 xl:left-14 md:left-5 left-14 rounded-lg font-bold w-44 text-center">
                  <p>kids</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;

/*
 <div className="bg-white py-10 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-5 2xl:mx-20 xl:mx-10 mx-5 ">
        <Link
          to={"category/mens_panjabi"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg"
        >
          <div className="ml-4 p-4">
            <h4 className="text-lg font-bold">Mens Panjabi</h4>
            <p className="text-gray-500 font-sans">8 Items</p>
          </div>
          <img className="h-16" src={img1} alt="" />
        </Link>
        <Link
          to={"category/womens_kurti"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Womens Kurti</h4>
            <p className="text-gray-500 font-sans">10 Items</p>
          </div>
          <img className="h-14" src={img2} alt="" />
        </Link>
        <Link
          to={"category/Womens_3_pcs"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Womens 3 PCS</h4>
            <p className="text-gray-500 font-sans">10 Itmes</p>
          </div>
          <img className="h-14" src={img3} alt="" />
        </Link>
        <Link
          to={"category/boys_collection"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Boys Collection</h4>
            <p className="text-gray-500 font-sans">13 Items</p>
          </div>
          <img className="h-14" src={img4} alt="" />
        </Link>
        <Link
          to={"category/girls_collection"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Girls Collection</h4>
            <p className="text-gray-500 font-sans">4 Items</p>
          </div>
          <img className="h-14" src={img5} alt="" />
        </Link>
        <Link
          to={"category/mens"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Mens</h4>
            <p className="text-gray-500 font-sans">5 Items</p>
          </div>
          <img className="h-14" src={img6} alt="" />
        </Link>
        <Link
          to={"category/wemons"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Women</h4>
            <p className="text-gray-500 font-sans">6 Items</p>
          </div>
          <img className="h-14" src={img7} alt="" />
        </Link>
        <Link
          to={"category/kids"}
          className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        >
          <div className="ml-4">
            <h4 className="text-lg font-bold">Kids</h4>
            <p className="text-gray-500 font-sans">10 Items</p>
          </div>
          <img className="h-14" src={img8} alt="" />
        </Link>
        //  <Link
        //   to={"category/portableSpeakers"}
        //   className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4"
        // >
        //   <div className="ml-4">
        //     <h4 className="text-lg font-bold">Portable Speakers</h4>
        //     <p className="text-gray-500 font-sans">8 Items</p>
        //   </div>
        //   <img className="h-14" src={img9} alt="" />
        // </Link>
        // <Link
        //   to={"category/homeAppliances"}
        //   className="flex items-center justify-between hover:bg-slate-700 hover:text-white duration-300 rounded-lg p-4 "
        // >
        //   <div className="ml-4">
        //     <h4 className="text-lg font-bold">Home Appliances</h4>
        //     <p className="text-gray-500 font-sans">6 Items</p>
        //   </div>
        //   <img className="h-14" src={img10} alt="" />
        // </Link> 
      </div> 
*/
