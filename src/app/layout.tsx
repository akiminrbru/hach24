import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/widgets/header";
import { QueryProvider } from "./QueryProvider";
import { AuthProvider } from "./AuthProvider";
import Loading from "./loading";
import { Suspense } from "react";
import { Footer } from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hack",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>
					<AuthProvider>
						<Suspense fallback={<Loading />}>
							<Header />
							{children}
							<Footer />
						</Suspense>
					</AuthProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
