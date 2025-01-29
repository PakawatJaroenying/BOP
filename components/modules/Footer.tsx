"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { dictionary } from "@/lib/dictionary";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";

function Footer() {
	const { language } = useLanguage();
	const t = useMemo(
		() => dictionary[language as keyof typeof dictionary],
		[language, dictionary]
	);
	return (
		<footer className="bg-blue-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">{t.footer.about.title}</h3>
						<p className="text-blue-200">{t.footer.about.description}</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">
							{t.footer.quickLinks.title}
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									{t.footer.quickLinks.projects}
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									{t.footer.quickLinks.volunteer}
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									{t.footer.quickLinks.map}
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-200 hover:text-white"
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">{t.footer.share.title}</h3>
						<Button
							variant="link"
                            color=""
							className=" text-white border-white hover:bg-white/10 !text-start justify-start" 
                            onClick={()=>{
                                //คัดลอก url และแชร์
                                navigator.clipboard.writeText(window.location.href).then(() => {
                                    // alert(t.footer.share.copied);
                                }).catch(err => {
                                    console.error('Failed to copy: ', err);
                                });
                            }}
						>
							<Share2 className="mr-2 h-4 w-4" /> {t.footer.share.button}
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
