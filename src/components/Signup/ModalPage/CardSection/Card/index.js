import Image from "next/image";
import React from "react";

export const Card = ({ imgPath, title, tag }) => {
	return (
		<button className="w-full p-1 lg:p-6 flex flex-row lg:flex-col items-center border-gray-200 border-[1px] lg:border-2 rounded-[20px] transform transition-transform hover:scale-[1.02] hover:shadow-xl ">
			<div className="relative w-[100px] lg:w-full h-[100px] lg:h-[200px]">
				<Image
					alt="jobs"
					src={imgPath}
					layout="fill"
					objectFit="contain"
					objectPosition="center"
					className="absolute"
				/>
			</div>
			<div>
				<h1 className=" text-start lg:text-center text-md lg:text-2xl font-bold">{title}</h1>
				<p className=" text-start lg:text-center text-gray-400 text-[15px]">{tag}</p>
			</div>
		</button>
	);
};
