import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="bg-slate-100 py-10 px-5 xl:px-10 2xl:px-20">
        <h2>Featured Collection</h2>
        <div>
          <Swiper
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // loop={true}
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
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aso-delay="500"
          >
            {products?.map((p, i) => (
              <SwiperSlide key={i} className="bg-white rounded-lg p-2">
                <Link to={`/product/${p?._id}`}>
                  <div className="flex justify-center">
                    <img
                      className="w-full rounded-lg"
                      src={p?.images[0]?.original}
                      alt=""
                    />
                  </div>
                  <p className="my-5 mx-2 font-extrabold mb-3">{p?.name} </p>
                  <div className="flex gap-2">
                    <del className="text-red-500">{p?.offPrice}</del>
                    <p>{p?.amount} BDT</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
