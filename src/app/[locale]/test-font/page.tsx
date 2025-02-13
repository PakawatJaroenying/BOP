import React from "react";

function TestFont() {
	return (
		<div className="min-h-screen   to-white bg-black/50">
			<div className="container mx-auto py-20">
				<div className="p-4">Default Test ทดสอบ</div>
				<hr />
				<div className="p-4 ">
					สำหรับภาษาอังกฤษ
					<div className="headline">Headline: Montserrat</div>
					<div className="body">Body: Helvetica</div>
				</div>
				<hr />
				<div className="p-4">
					สำหรับภาษาไทย 
                    <div className="headline">ibm-plex-thai ภาษาไทย</div>
                    <div className="body">font-thonburi ภาษาไทย</div>
				</div>
			</div>
		</div>
	);
}

export default TestFont;
