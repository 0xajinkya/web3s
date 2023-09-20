import React from "react";

export const MainPage = ({ children }) => {
	return (
		<div
			className="mt-0 lg:mt-16 bg-white px-8 py-8 rounded-[0px] lg:rounded-[20px] w-full lg:w-[1200px] h-auto lg:h-full"
		>
			{children}
		</div>
	);
};
