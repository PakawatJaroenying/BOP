"use client";

import React from "react";
import Image from "next/image";
import { Project } from "./page";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Variants สำหรับการ์ดแต่ละโครงการ (Fade-in + Slide-up)
const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

// Variants สำหรับ Header & Description
const textVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectsSection = () => {
	const t = useTranslations();
	const projects: Project[] = t.raw("project.projects");

	return (
		<div className="py-16">
			<div className="container mx-auto px-4">
				<div className="space-y-20">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							custom={index}
							className={`flex flex-col ${
								index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} gap-8 items-center`}
						>
							{/* รูปภาพโครงการ */}
							<div className="w-full lg:w-1/2">
								<div className="relative group overflow-hidden rounded-2xl gap-1 grid grid-cols-2">
									{project.images.map((image, i) => (
										<motion.div
											key={i}
											className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden"
										>
											<Image
												src={image}
												alt={`Project image ${i + 1}`}
												fill
												className="object-cover w-full h-full transition-transform duration-300"
											/>
										</motion.div>
									))}
								</div>
							</div>

							{/* ข้อมูลโครงการ */}
							<motion.div
								variants={textVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								className="w-full lg:w-1/2 space-y-6 self-start"
							>
								<h2 className="text-3xl font-bold text-gray-900 headline">
									{project.name}
								</h2>
								<div className="prose prose-xl w-full text-gray-600 body text-justify">
									{project.description.split("\n").map((paragraph, i) => (
										<p key={i}>{paragraph.trim()}</p>
									))}
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
