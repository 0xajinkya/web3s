import React from "react";
import { Header } from "./Header";
import { Heading } from "./Heading";
import { CardSection } from "./CardSection";
import { Footer } from "./Footer";
import { Card } from "./CardSection/Card";

export const Step1 = () => {
	return (
		<div className="flex flex-col w-full px-2 gap-5 h-screen">
			<Header />
			<Heading text={"What brings you to Contra?"} textCSS={"text-center"} />
			<div
				className="px-0 lg:px-16"
			>
				<CardSection>
					<Card
						imgPath={"/images/1.webp"}
						title={"I'm an independent"}
						tag={"Find work and manage your freelance business"}
						large={true}
					/>
					<Card
						imgPath={"/images/2.webp"}
						title={"I'm hiring"}
						tag={"Post opportunities and discover independents"}
						large={true}
					/>
				</CardSection>
			</div>
			<Footer />
		</div>
	);
};
