"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./BannerSlider.css";
import "swiper/css/effect-fade";
import Link from "next/link";

// importing images
import BG1 from "./images/banner-bg.jpg";
// Category images
import CT1 from "./images/category1.jpg";
import CT1b from "./images/category1b.jpg";
import CT2 from "./images/category2.jpg";
import CT3 from "./images/category3.jpg";
import CT4 from "./images/category4.jpg";
import CT5 from "./images/category5.jpg";
import CT6 from "./images/category6.jpg";
import CT7 from "./images/category7.jpg";
import CT9 from "./images/category9.jpg";
import CT10 from "./images/category10.jpg";
import CT11 from "./images/category11.jpg";

const bannerImages = [CT7, CT1, CT1b, CT2, CT3, CT4, CT5, CT6, CT9, CT10, CT11];
// Sequence matters, CT1 will be applied to first slide, CT2 will be applied to second slide and so on.

function BannerSlider() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        if (Array.isArray(json.categories)) {
          setCategories(json.categories);
        } else {
          console.warn("Invalid response format:", json);
          setCategories([]);
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="relative">
      {categories.length === 0 ? (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      ) : null}
      <Swiper
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="h-[25vh] lg:h-[70vh]"
      >
        <SwiperSlide>
          <div className="relative h-full w-full isolate">
            <Image
              className="w-full h-full object-contain lg:object-cover absolute bg-gradient-to-r from-[#cb9918] to-[#e5bd52]"
              src={BG1}
            />
            {/* <div className="absolute inset-0 bg-primary-900 opacity-50"></div> */}
            <div className="text-white relative z-10 px-8 py-8 lg:py-12 h-full flex flex-col">
              <h2
                className="text-base lg:text-6xl text-black text-center mt-5 lg:mt-[110px] lg:mb-10 font-hafs font-bold"
                style={{ textShadow: "0px 0px 2px #fff" }}
              >
                إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
              </h2>
            </div>
          </div>
        </SwiperSlide>
        {categories.length
          ? categories.map((category, i) => {
              const matches = category.name
                ?.trim()
                .match(/^(.+?)\s*\(([^()]+)\)\s*$/);
              const title = matches?.[1] ?? category.name ?? "";
              const subtitle = matches?.[2] ?? "";
              return (
                <SwiperSlide key={category.id}>
                  <div className="relative h-full w-full isolate">
                    <Image
                      className="w-full h-full object-cover absolute"
                      src={bannerImages[i]}
                    />
                    <div className="absolute inset-0 bg-primary-900 opacity-50"></div>
                    <div className="text-white text-center relative z-10 px-8 py-12 h-full flex flex-col justify-center items-center gap-2 lg:gap-8">
                      <h2 className="text-base lg:text-6xl mt-5">{title}</h2>
                      <h2 className="text-base lg:text-6xl">{subtitle}</h2>
                      <Link
                        href={`/subcategory?categoryId=${category._id}&categoryName=${category.name}&index=${i}`}
                        className="block px-4 py-1 rounded-full bg-secondary text-white text-[10px] lg:text-xl hover:bg-secondary-400"
                      >
                        Start reading
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
