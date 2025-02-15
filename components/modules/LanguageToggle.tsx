'use client';
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

export default function LanguageToggle() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = () => {
    router.replace(pathname, { locale: locale === "th" ? "en" : "th" });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={changeLanguage}
        className="flex items-center gap-2"
      >
        {locale === "th" ? "EN" : "TH"}
      </Button>
    </motion.div>
  );
}
