import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

export default function middleware(request: any) {
	return createMiddleware(routing)(request);
}

export const config = {
	matcher: ["/", "/(th|en)/:path*"],
};
