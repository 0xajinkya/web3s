import React from "react";

export const Header = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex justify-center items-center gap-2">
				<div className="flex-shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-8 lg:w-12 h-8 lg:h-12"
					>
						<path
							fillRule="evenodd"
							d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<h1 className="font-inter font-bold text-5xl hidden sm:hidden md:hidden lg:flex">Contra</h1>
			</div>

			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 lg:w-10 h-6 lg:h-10 text-gray-500 hover:text-black"
				>
					<path
						fillRule="evenodd"
						d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
};
