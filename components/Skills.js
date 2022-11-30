import Image from "next/image";
import React from "react";

const Skills = () => {
	return (
		<div className="font-serif  font-medium w-screen h-screen  flex justify-center items-center">
			<div className="container w-[1200px] my-0 mx-auto flex justify-center items-center">
				<div className="w-[290px] h-[440px] md:w-[600px] md:h-[500px] lg:w-[800px] lg:h-[700px] text-sm sm:text-base outline outline-offset-1 outline-white py-2 px-8 md:py-10 md:px-20 lg:py-14 lg:px-36 lg:text-3xl">
					<h2 className=" text-2xl lg:text-6xl flex justify-center font-semibold  mb-12">
						My Skills
					</h2>
					<div className=" flex items-center justify-between mb-1">
						<p> HTML</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>CSS/SASS/SCSS</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>JavaScript (ES6)</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>Photoshop</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>ReactJS</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>NextJS</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>NodeJS</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>TypeScript</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>React-hook-form </p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>Fetch/Axios</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>Git/GitHub </p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
					<div className=" flex items-center justify-between mb-1">
						<p>Redux-Toolkit</p>
						<div className="relative w-6 h-6">
							<Image
								src="/mark.png"
								layout="fill"
								alt="check-mark"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
