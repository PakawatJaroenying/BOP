import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default function middleware(request:any) {
	console.log("Middleware triggered on:", request.nextUrl.pathname);
	return createMiddleware(routing)(request);
}

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(th|en)/:path*"],
};
