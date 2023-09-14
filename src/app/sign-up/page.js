import { MainPage } from "@/components/Signup";
import { ModalPage } from "@/components/Signup/ModalPage";
import Image from "next/image";

export default function Signup() {
	return (
		<div className="flex items-center justify-center mx-auto w-full h-screen overflow-y-scroll">
			<MainPage>
				<ModalPage />
			</MainPage>
		</div>
	);
}
