export const dynamic = "force-static";

import React from "react";
import { Waves } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const generateStaticParams = async () => {
	return [{ locale: "en" }, { locale: "th" }];
};

export interface Project {
	name: string;
	description: string;
	images: string[];
}

async function Page({ params }: { params: { locale: string } }) {
	const t = await getTranslations({ locale: params.locale }); // ✅ ใช้ getTranslations() แทน useTranslations()
	const projects: Project[] = t.raw("project.projects");

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			{/* Hero Section */}
			<div className="relative bg-blue-900 text-white py-20">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
							{t("project.ourProjects")}
						</h1>
						<p className="text-xl text-blue-100 body">
							{t("project.innovative")}
						</p>
					</div>
				</div>
			</div>

			{/* Projects Section */}
			<div className="py-16">
				<div className="container mx-auto px-4">
					<div className="space-y-20">
						{projects.map((project, index) => (
							<div
								key={index}
								className={`flex flex-col ${
									index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
								} gap-8 items-center`}
							>
								<div className="w-full lg:w-1/2">
									<div className="relative group overflow-hidden rounded-2xl   gap-1 grid grid-cols-2">
										{project.images.map((image, i) => (
											<div
												key={i}
												className="relative   h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden"
											>
												<Image
													src={image}
													alt={`Project image ${i + 1}`}
													fill
													className="object-cover w-full h-full"
												/>
											</div>
										))}
									</div>
								</div>
								<div className="w-full lg:w-1/2 space-y-6 self-start">
									<h2 className="text-3xl font-bold text-gray-900 headline">
										{project.name}
									</h2>
									<div className="prose prose-xl  w-full  text-gray-600 body text-justify">
										{project.description.split("\n").map((paragraph, i) => (
											<p key={i}>{paragraph.trim()}</p>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="bg-blue-900/80 text-white py-16">
				<div className="container mx-auto px-4 text-center">
					<Waves className="w-12 h-12 mx-auto mb-6 text-blue-400" />
					<h2 className="text-3xl font-bold mb-4 headline">
						{t("project.cta")}
					</h2>
					<p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto body">
						{t("project.ctaDescription")}
					</p>
					<button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
						{t("project.ctaBtn")}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Page;
