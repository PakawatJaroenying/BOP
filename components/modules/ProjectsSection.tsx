"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { Project } from "../../src/app/[locale]/projects/page";
import { Link } from "@/src/i18n/routing";

const ProjectsSection = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const t = useTranslations();
	const projects: Project[] = useMemo(() => t.raw("project.projects"), [t]);

	if (!isMounted) return null;

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
					{t("project.ourProjects")}
				</h2>
				<div className="grid lg:grid-cols-1 gap-8">
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						className="rounded-lg overflow-hidden h-[20rem] lg:h-[35rem] w-full"
						autoplay={{ delay: 5000 }}
					>
						{[...projects[0].images,...projects[1].images].map((image, i) => (
							<SwiperSlide
								key={i}
								className="relative w-full h-96"
							>
								<Image
									src={image}
									alt={`Project Image ${i + 1}`}
									fill
									className="object-cover rounded-lg"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default React.memo(ProjectsSection);
