"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { TeamMember } from "./types";
import { motion } from "framer-motion";

interface ModalProps {
	member: TeamMember;
	onClose: () => void;
}

// Variants สำหรับ Modal (Fade-in + Scale-up)
const modalVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Modal({ member, onClose }: ModalProps) {
	// ปิด Scroll ของ body เมื่อ Modal เปิด
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	if (!member) return null;

	return (
		<motion.div
			variants={modalVariants}
			initial="hidden"
			animate="show"
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
		>
			<div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-lg">
				{/* Header (Fixed) */}
				<div className="p-6 border-b flex justify-between items-start sticky top-0 bg-white z-10">
					<div>
						<h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
						<p className="text-blue-600">{member.nickname}</p>
						<p className="text-gray-700 font-semibold mt-1">
							{member.position}
						</p>
					</div>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700 transition-colors"
					>
						<X className="w-6 h-6" />
					</button>
				</div>

				{/* Body (Scrollable) */}
				<div className="overflow-y-auto px-6 py-4 flex-grow">
					<div className="aspect-w-16 aspect-h-9 mb-4">
						<Image
							src={member.image}
							alt={member.name}
							width={500}
							height={300}
							objectFit="cover"
							objectPosition="center"
							className="rounded-lg mx-auto w-full"
						/>
					</div>
					<div className="prose max-w-none">
						<p className="text-gray-600 leading-relaxed text-justify">
							{member.description}
						</p>
					</div>
				</div>

				{/* Bottom (Fixed) */}
				<div className="p-6 border-t sticky bottom-0 bg-white z-10 flex justify-end">
					<button
						onClick={onClose}
						className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
					>
						Close
					</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Modal;
