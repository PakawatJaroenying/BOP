"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Facebook,
	FileText,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

function ContentSection() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const images = [
		"/gallery/0D25B498-9797-4B81-8A06-E0C95019CFFC.jpg",
		"/gallery/1C325B8F-0800-4F83-B385-1225B8C31795.jpg",
		"/gallery/05.jpg",
		"/gallery/7A614B21-6632-4A1D-BDA1-808DA62E5876.jpg",
		"/gallery/7D7F5CFB-58CC-4ED9-A838-D1A604AABD50.jpg",
		"/gallery/9AAFCE81-3106-4C26-A256-86681C1C8482.jpg",
		"/gallery/11.jpg",
		"/gallery/17.jpg",
		"/gallery/34F5DC56-8EBD-4A4E-BA5A-E7589205ABDA.jpg",
		"/gallery/85F013E5-820F-4EA4-B83B-BC8BEC3BDF63.jpg",
		"/gallery/179BF0D7-FE25-4268-828A-65E459DCF2E2.jpg",
		"/gallery/1196E08F-609C-45E6-BC52-465A2C1C77EC.jpg",
		"/gallery/6264.jpg",
		"/gallery/9421884C-A054-4EBA-B046-406A30ED6951.jpg",
		"/gallery/686003AD-3265-4B2C-B8B9-FB02D06D0FD2.jpg",
		"/gallery/ED27D65F-11B6-4371-84F9-C4D988A4F183.jpg",
		"/gallery/F44AF335-EAE9-4F0F-AC78-3405232A2CCA.jpg",
		"/gallery/S__36102285_0.jpg",
		"/gallery/S__36126916_0.jpg",
		"/gallery/S__36126931_0.jpg",
		"/gallery/S__36257824_0.jpg",
		"/gallery/S__36257827_0.jpg",
		"/gallery/S__36257839_0.jpg",
		"/gallery/S__36257865_0.jpg",
		"/gallery/S__36257867_0.jpg",
	];
	const t = useTranslations();

	return (
		<>
			<section className="py-20 bg-gradient-to-b from-blue-200 to-green-100">
				<div className="max-w-5xl mx-auto px-4 text-center">
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{images.map((src, index) => (
							<div
								key={index}
								className="relative overflow-hidden rounded-lg shadow-lg group"
								onClick={() => setSelectedImage(src)}
							>
								<Image
									src={src}
									alt={`Gallery Image ${index + 1}`}
									width={300}
									height={200}
									className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{selectedImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
					<div className="relative">
						<Image
							src={selectedImage}
							alt="Selected Image"
							width={800}
							height={600}
							className="object-contain"
                            priority
                            loading="eager"
						/>
					</div>
					<button
						className="absolute top-2 right-2 text-white text-2xl"
						onClick={() => setSelectedImage(null)}
					>
						&times;
					</button>
				</div>
			)}
		</>
	);
}

export default ContentSection;
