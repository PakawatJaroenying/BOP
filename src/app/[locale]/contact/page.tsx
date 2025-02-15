import React from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<HeroSection />
			<ContentSection />
		</div>
	);
}

export default Page;
