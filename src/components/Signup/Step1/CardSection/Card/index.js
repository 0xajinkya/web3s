import Image from "next/image";
import React from "react";

export const Card = ({ imgPath, title, tag, large }) => {
	return (
		<button className="w-full p-1 lg:p-6 flex flex-row md:flex-col items-center border-gray-200 border-[1px] lg:border-2 rounded-[20px] transform transition-transform hover:scale-[1.02] hover:shadow-xl ">
			<div className={`relative  w-[100px] lg:w-full h-[70px] ${large ? "md:h-[200px]" : "md:h-[100px]"}`}>
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
				<h1 className=" text-start md:text-center text-md lg:text-xl font-medium">{title}</h1>
				<p className=" text-start md:text-center text-gray-400 text-[15px]">{tag}</p>
			</div>
		</button>
	);
};
