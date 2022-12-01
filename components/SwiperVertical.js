import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import Greeting from "./Greeting";
import Todo from "./Todo";
import Apple from "./Apple";
import Skills from "./Skills";
import GetInTouch from "./GetInTouch";
import Tipster from "./Tipster";

export default function SwiperVertical() {
	return (
		<>
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				spaceBetween={130}
				mousewheel={true}
				modules={[Mousewheel]}
				className="mySwiper w-screen h-screen"
			>
				<SwiperSlide className="text-6xl w-screen h-screen">
					<Greeting />
				</SwiperSlide>
				<SwiperSlide className="text-6xl w-screen h-screen">
					<Apple />
				</SwiperSlide>

				<SwiperSlide className="text-6xl w-screen h-screen">
					<Tipster />
				</SwiperSlide>

				<SwiperSlide className="text-6xl w-screen h-screen">
					<Todo />
				</SwiperSlide>
				<SwiperSlide className="text-6xl w-screen h-screen">
					<Skills />
				</SwiperSlide>
				<SwiperSlide className="text-6xl w-screen h-screen">
					<GetInTouch />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
