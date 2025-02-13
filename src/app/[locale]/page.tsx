import React from "react";
import HeroSection from "@/components/modules/HeroSection";
import ImpactStatistics from "@/components/modules/ImpactStatistics";
import ProjectsSection from "@/components/modules/ProjectsSection";
import RecyclingMap from "@/components/modules/RecyclingMap";
import VolunteerRegistration from "@/components/modules/VolunteerRegistration";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<ImpactStatistics />
			<ProjectsSection />
			<RecyclingMap />
			<VolunteerRegistration />
		</main>
	);
}
