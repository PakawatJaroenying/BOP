"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { TH, US } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();
	const changeLanguage = () => {
		router.replace(pathname, { locale: locale === "th" ? "en" : "th" });
	};

	return (
		<Button
			variant="outline"
			size="sm"
			onClick={changeLanguage}
			className="hover:bg-white/10 flex items-center gap-2"
		>
			{locale === "th" ? (
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
