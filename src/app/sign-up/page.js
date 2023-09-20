import { MainPage, Step1, Step2 } from "@/components/Signup";

import Image from "next/image";

export default function Signup() {
	return (
		<div className="flex  items-start lg:items-center justify-center w-full h-screen lg:h-auto min-h-screen">
			<MainPage>
				{/* <Step1 /> */}
				<Step2 />
			</MainPage>
		</div>
	);
}
