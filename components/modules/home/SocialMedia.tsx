"use client";
import React, { useEffect } from "react";

function SocialMedia() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://www.instagram.com/embed.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
			{/* Facebook Embed */}
			<div className="w-full flex  justify-center">
				<iframe
					className="min-w-[550px]"
					src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FThesustainabilityjourneysamui%2Fposts%2Fpfbid02GGLCGFNNfxwpwkE43BSp9sDgPio49bGYMDv3JGNc3c1dAG6noT77Dds3TKAMsAj2l&show_text=true"
					style={{ border: "none", overflow: "hidden" }}
					scrolling="no"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				></iframe>
			</div>

			{/* Instagram Embed */}
			<InstagramEmbed postUrl="https://www.instagram.com/p/DGC-NXkyfB5/?utm_source=ig_embed&amp;utm_campaign=loading" />
		</div>
	);
}

function InstagramEmbed({ postUrl }: { postUrl: string }) {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://www.instagram.com/embed.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<div className="w-full flex justify-center">
			<blockquote
				className="instagram-media w-full md:w-[90%] max-w-[700px]"
				data-instgrm-permalink={postUrl}
				data-instgrm-version="14"
			></blockquote>
		</div>
	);
}

export default SocialMedia;
