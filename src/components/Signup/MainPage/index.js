import React from "react";

export const MainPage = ({ children }) => {
	return (
		<div className="mx-auto w-screen sm:w-screen lg:w-[1200px] h-full lg:h-[775px] rounded-0 lg:rounded-[20px] px-2 lg:px-6 pt-3 lg:pt-6 bg-white mb-0 lg:mb-16">
			{children}
		</div>
	);
};
