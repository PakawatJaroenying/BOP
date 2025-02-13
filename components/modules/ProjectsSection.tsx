"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { Project } from "../../src/app/[locale]/projects/page";

export default function ProjectsSection() {
	const t = useTranslations();
	const projects: Project[] = t.raw("project.projects");
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
					{t("project.ourProjects")}
				</h2>
				<div className="grid lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white p-6 shadow-xl rounded-xl"
						>
							<h3 className="text-2xl font-semibold text-gray-800 mb-4">
								{project.name}
							</h3>
							<Swiper
								modules={[Navigation, Pagination, Autoplay]}
								spaceBetween={10}
								slidesPerView={1}
								navigation
								pagination={{ clickable: true }}
								className="rounded-lg overflow-hidden h-96"
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
							<p className="text-gray-700 mt-4 line-clamp-5 text-justify body">
								{project.description}
							</p>
							<div className="w-full flex justify-end">
								<Button
									size="sm"
									className="mt-4 bg-teal-600 hover:bg-teal-700 text-end"
								>
									Read More
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
