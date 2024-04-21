import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { url, cookies } = request;
	const token = cookies.get("token")?.value;

	const isDashboardPage = url.includes("/dashboard");
	const isAuthPage = url.includes("/authorization");
	const isRegPage = url.includes("/registration");

	if (isAuthPage && token) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (isRegPage && token) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (isDashboardPage && !token) {
		return NextResponse.redirect(new URL("/authorization", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/authorization", "/registration"],
};
