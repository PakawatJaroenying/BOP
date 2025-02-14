"use client";

import { useState } from "react";
import Image from "next/image";
import { Droplets } from "lucide-react";
import Modal from "./readmoreModal";
import { TeamMember } from "./types";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Variants สำหรับการ์ดทีมงาน (เลื่อนขึ้น + Fade-in)
const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

// Variants สำหรับ Modal (Fade-in)
const modalVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function TeamSection() {
	const t = useTranslations();
	const teamMembers: TeamMember[] = t.raw("teamMembers");
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	return (
		<div className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							custom={index}
							className="   rounded-lg shadow-lg  "
						>
							<div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
								<Image
									className="transform hover:scale-105 transition-transform duration-300 object-cover"
									src={member.image}
									alt={member.name}
									layout="fill"
									objectFit="cover"
									quality={100}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1 headline">
									{member.name}
								</h3>
								<p className="text-sm text-blue-600 mb-2 body">
									{member.nickname}
								</p>
								<p className="text-md font-semibold text-gray-700 mb-4 headline">
									{member.position}
								</p>
								<p className="text-gray-600 text-sm line-clamp-4 mb-4 body prose prose-lg text-justify">
									{member.description}
								</p>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => setSelectedMember(member)}
									className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center body"
								>
									Read More
									<Droplets className="w-4 h-4 ml-1" />
								</motion.button>
							</div>
						</motion.div>
					))}
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
