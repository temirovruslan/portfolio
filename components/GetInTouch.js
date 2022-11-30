import Image from "next/image";
import React from "react";

const GetInTouch = () => {
	return (
		<div className="w-screen h-screen  flex justify-center items-center flex-col">
			<h2 className="flex justify-center items-center mb-16 text-4xl font-semibold md:4x1	 lg:text-6xl	font-serif">
				Get in touch
			</h2>
			<div>
				<div className="flex">
					<div className="flex flex-col  mb-12 mr-6 md:mr-10">
						<div className="flex align-center justify-center rounded-md mb-6 cursor-pointer">
							<Image
								src="/telephone.svg"
								width={50}
								height={50}
								alt="icon"
							/>
						</div>
						<div className="flex align-center justify-center rounded-md cursor-pointer">
							<Image
								src="/gmail.svg"
								width={40}
								height={40}
								alt="icon"
							/>
						</div>
					</div>
					<div className="   mb-12">
						<p className="pt-6  text-sm md:text-2xl	md:pt-2 lg:text-3xl ">
							+3725530939
						</p>
						<p className="pt-8  text-sm md:text-2xl	md:pt-6 lg:text-3xl ">
							ruslan.temirov1995@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
