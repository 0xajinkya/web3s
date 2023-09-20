import React from "react";

export const Heading = ({ text, textCSS, tagline, taglineCSS }) => {
	return (
		<div
			className="flex flex-col gap-4"
		>
			<h1 className={`text-2xl sm:text-2xl md:text-2xl lg:text-3xl mt-3 font-medium ${textCSS}`}>
				{text}
			</h1>
			<p
				className={`${taglineCSS}`}
			>
				{tagline}
			</p>
		</div>
	);
};
