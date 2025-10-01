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
					src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D122094676353056905%26set%3Dpcb.122094676455056905&width=550&show_text=true&height=748&appId"
					width="550"
					height="660"
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
