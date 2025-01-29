"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { dictionary } from "@/lib/dictionary";
import { Droplets, Waves } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import Modal from "./readmoreModal";
import { useData } from "./data";

function AboutUsPage() {
	const { teamMembers } = useData();
	const [selectedMember, setSelectedMember] = useState<
		(typeof teamMembers)[0] | null
	>(null);
	const { language } = useLanguage();
	const t = dictionary[language as keyof typeof dictionary];

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			{/* Hero Section */}
			<div className="relative bg-blue-900 text-white py-20">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
						<h1 className="text-4xl md:text-5xl font-bold">
							{t.about.ourTeam}
						</h1>
						<article className="text-xl text-blue-100">
							{t.about.mission}
						</article>
					</div>
				</div>
			</div>

			{/* Mission Statement */}
			<div className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<Waves className="w-12 h-12 text-blue-600 mx-auto mb-6" />
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							{t.about.ourMission}
						</h2>
						<article className="text-lg text-gray-600 text-justify">
							{t.about.companyHistory}
						</article>
					</div>
				</div>
			</div>

			{/* Team Members */}
			<div className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-lg shadow-lg"
							>
								<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
									<Image
										className="transform hover:scale-105 transition-transform duration-300"
										src={member.image}
										alt={member.name}
										width={500}
										height={500}
										layout="responsive"
										quality={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-sm text-blue-600 mb-2">
										{member.nickname}
									</p>
									<p className="text-md font-semibold text-gray-700 mb-4">
										{member.position}
									</p>
									<p className="text-gray-600 text-sm line-clamp-4 mb-4">
										{member.description}
									</p>
									<button
										onClick={() => setSelectedMember(member)}
										className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center"
									>
										Read More
										<Droplets className="w-4 h-4 ml-1" />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Modal */}
			{selectedMember && (
				<Modal
					member={selectedMember}
					onClose={() => setSelectedMember(null)}
				/>
			)}
		</div>
	);
}

export default AboutUsPage;
