"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Project } from "@/src/app/[locale]/projects/page";

// Variants สำหรับ Section (Fade-in เมื่อ Scroll ถึง)
const sectionVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

// Animation สำหรับการ์ด (เลื่อนขึ้น + Fade-in)
const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

// Animation สำหรับ Swiper Slide (เลื่อนจากซ้ายไปขวา)
const slideVariants = {
	hidden: { opacity: 0, x: -50 },
	show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const t = useTranslations();
	const projects: Project[] = useMemo(() => t.raw("project.projects"), [t]);

	if (!isMounted) return null;

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="py-5 lg:py-20 bg-white"
		>
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-4 lg:mb-16 text-blue-900 headline"
				>
					{t("project.ourProjects")}
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							custom={index}
							className="bg-white p-6 shadow-xl rounded-xl flex flex-col gap-4"
						>
							<h3 className="text-2xl font-semibold text-gray-800 mb-4">
								{project.name}
							</h3>

							{/* Swiper with Motion */}
							<motion.div variants={slideVariants}>
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									spaceBetween={10}
									slidesPerView={1}
									navigation
									pagination={{ clickable: true }}
									className="rounded-lg overflow-hidden h-96 flex-grow"
									style={{ margin: "unset" }}
									autoplay={{ delay: 5000 }}
								>
									{project.images.map((image, i) => (
										<SwiperSlide
											key={i}
											className="relative w-full h-96"
										>
											<Image
												src={image}
												alt={`Project ${index + 1} Image ${i + 1}`}
												fill
												className="object-cover rounded-lg"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</motion.div>

							<p className="text-gray-700 mt-4 line-clamp-5 text-justify prose prose-sm  md:prose-lg">
								{project.description}
							</p>

							<div className="w-full flex justify-end">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										size="sm"
										className="mt-4 bg-teal-600 hover:bg-teal-700 text-end"
									>
										<Link href={`/projects`}>Read More</Link>
									</Button>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default React.memo(ProjectsSection);
