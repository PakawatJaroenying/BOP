export const dynamic = "force-static";
import { useTranslations } from "next-intl";
import HeroSection from "./HeroSection";
import MissionStatement from "./MissionStatement";
import TeamSection from "./teamsection";
import AboutPage from "./AboutPage";

export const generateStaticParams = async () => {
	return [{ locale: "en" }, { locale: "th" }];
};

export default function AboutUsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<HeroSection />
			<MissionStatement />
			<AboutPage />
			<TeamSection />
		</div>
	);
}
