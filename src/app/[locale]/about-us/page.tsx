export const dynamic = "force-static";
import HeroSection from "./HeroSection";
import MissionStatement from "./MissionStatement";
import TeamSection from "./teamsection";

export const generateStaticParams = async () => {
	return [{ locale: "en" }, { locale: "th" }];
};

export default function AboutUsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<HeroSection />
			<MissionStatement />
			<TeamSection />
		</div>
	);
}
