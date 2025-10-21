export const dynamic = "auto";

import React from "react";
import HeroSection from "@/components/modules/home/HeroSection";
import ImpactStatistics from "@/components/modules/home/ImpactStatistics";
import RecyclingMap from "@/components/modules/home/RecyclingMap";
import VolunteerRegistration from "@/components/modules/home/VolunteerRegistration";
import ProjectsSection from "@/components/modules/home/ProjectsSection";
import SocialMedia from "@/components/modules/home/SocialMedia";
import OurPartners from "@/components/modules/home/Ourpartner";

export const generateStaticParams = async () => {
	return [{ locale: "en" }, { locale: "th" }];
};

export default async function Home({ params }: { params: { locale: string } }) {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<ImpactStatistics />
			<ProjectsSection />
			<RecyclingMap />
			<OurPartners />
			<SocialMedia />
			<VolunteerRegistration />
		</main>
	);
}
