"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageProvider";
import { TH, US } from "country-flag-icons/react/3x2";

export default function LanguageToggle() {
	const { switchLanguage, language } = useLanguage();
	return (
		<Button
			variant="outline"
			size="sm"
			onClick={switchLanguage}
			className="  hover:bg-white/10 flex items-center gap-2"
		>
			{language === "th" ? (
				<>
					<TH
						title="Thailand"
						style={{ width: "35px" }}
					/>{" "}
					TH
				</>
			) : (
				<>
					<US
						title="United States"
						style={{ width: "35px" }}
					/>{" "}
					EN
				</>
			)}
		</Button>
	);
}
