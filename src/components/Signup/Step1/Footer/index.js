import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<div className="flex text-center flex-col gap-4 mx-auto justify-center mt-4">
			<h1>
				Already using Contra?{" "}
				<Link href={"/"} className="text-indigo-600">
					Sign in here!
				</Link>
			</h1>

			<p
				className="text-[12px] text-gray-400 "
			>
				By continuing, you agree to Contra&apos;s <Link href={"/"} className="underline">Terms of Use</Link> and confirm that you have read <br />Contra&apos;s <Link href={"/"} className="underline">Privacy Policy</Link>
			</p>
		</div>
	);
};
