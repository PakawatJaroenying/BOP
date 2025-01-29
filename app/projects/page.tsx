"use client";
import { Language, useLanguage } from "@/context/LanguageProvider";
import React, { useContext } from "react";
import { useData } from "./data";
import { ArrowRight, Waves } from "lucide-react";
import Image from "next/image";

function Page() {
	const { projects } = useData();
	const { language } = useLanguage();

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
						<h1 className="text-4xl md:text-5xl font-bold">
							{language === Language.EN ? "Our Projects" : "โครงการของเรา"}
						</h1>
						<p className="text-xl text-blue-100">
							{language === Language.EN
								? "Innovative solutions for a cleaner ocean and sustainable future"
								: "นวัตกรรมเพื่อท้องทะเลที่สะอาดและอนาคตที่ยั่งยืน"}
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
									<div className="relative group overflow-hidden rounded-2xl">
										<div className="aspect-[4/3] bg-gray-200 overflow-hidden rounded-2xl relative">
											<Image
												src={project.image}
												alt={project.name}
												fill
                        className="object-cover"
											/>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>
								</div>
								<div className="w-full lg:w-1/2 space-y-6">
									<h2 className="text-3xl font-bold text-gray-900">
										{project.name}
									</h2>
									<div className="prose prose-lg text-gray-600">
										{project.description.split("\n").map((paragraph, i) => (
											<p key={i}>{paragraph.trim()}</p>
										))}
									</div>
									{/* <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
										{language === Language.EN
											? "Learn More"
											: "เรียนรู้เพิ่มเติม"}
										<ArrowRight className="w-5 h-5 ml-2" />
									</button> */}
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
					<h2 className="text-3xl font-bold mb-4">
						{language === Language.EN
							? "Join Our Mission"
							: "ร่วมเป็นส่วนหนึ่งของภารกิจ"}
					</h2>
					<p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
						{language === Language.EN
							? "Together, we can make a difference in protecting our oceans and creating a sustainable future for generations to come."
							: "ร่วมกันสร้างความเปลี่ยนแปลงในการปกป้องท้องทะเลและสร้างอนาคตที่ยั่งยืนสำหรับคนรุ่นต่อไป"}
					</p>
					<button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
						{language === Language.EN ? "Get Involved" : "เข้าร่วมกับเรา"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Page;
