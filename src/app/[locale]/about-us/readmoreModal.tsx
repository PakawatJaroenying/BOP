"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { TeamMember } from "./page";

interface ModalProps {
	member: TeamMember;
	onClose: () => void;
}

function Modal({ member, onClose }: ModalProps) {
	//กรณี Open จะปิด scroll
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	if (!member) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				<div className="p-6">
					<div className="flex justify-between items-start mb-4">
						<div>
							<h2 className="text-2xl font-bold text-gray-900">
								{member.name}
							</h2>
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
					<div className="aspect-w-16 aspect-h-9 mb-6">
						<Image
							src={member.image}
							alt={member.name}
							width={500}
							height={300}
							objectFit="cover"
							objectPosition="center"
							className="rounded-lg mx-auto w-full "
						/>
					</div>
					<div className="prose max-w-none">
						<p className="text-gray-600 leading-relaxed text-justify">
							{member.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
