import Image from "next/image";
import { Waves } from "lucide-react";
import { useTranslations } from "next-intl";
import TeamSection from "./TeamSection";  

interface TeamMember {
  name: string;
  nickname: string;
  position: string;
  description: string;
  image: string;
}

export default function AboutUsPage() {
  const t = useTranslations();
  const teamMembers: TeamMember[] = t.raw("teamMembers");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
            alt="Ocean background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center my-20">
            <h1 className="text-4xl md:text-5xl font-bold headline">
              {t("about.ourTeam")}
            </h1>
            <article className="text-xl text-blue-100 body">
              {t("about.mission")}
            </article>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Waves className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6 headline">
              {t("about.ourMission")}
            </h2>
            <article className="text-lg text-gray-600 text-justify body">
              {t("about.companyHistory")}
            </article>
          </div>
        </div>
      </div>

      {/* Team Section (Client Component) */}
      <TeamSection teamMembers={teamMembers} />
    </div>
  );
}
