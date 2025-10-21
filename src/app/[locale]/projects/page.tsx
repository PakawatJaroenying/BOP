export const dynamic = "force-static";

import React from "react";
import { Waves } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import CallToAction from "./CallToAction";

export const generateStaticParams = async () => {
	return [{ locale: "en" }, { locale: "th" }];
};

export interface Project {
	name: string;
	description: string;
	images: string[];
	credit?: string[];
}

async function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<HeroSection />
			<ProjectsSection />
			<CallToAction />
		</div>
	);
}

export default Page;
