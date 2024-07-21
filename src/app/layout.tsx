import type { Metadata } from "next";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "みのじろー | 写真家・フォトグラファー",
	description: "minoJiro photographs",
	openGraph: {
		images: [
			"https://images.microcms-assets.io/assets/1dde428c7281432db90471bbf3e5cfe6/7615674ae8ac457b82fadfe4fb838a99/Mask%20group.jpg",
		],
		description: "minoJiro photographs",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="leading-7 text-sm text-[#5c6876]">
				<div className="max-w-7xl mx-auto px-4 py-12">
					<div className="sticky top-4 pb-12 z-10">
						<GlobalHeader />
					</div>
					{children}
				</div>
			</body>
			<GoogleTagManager gtmId="GTM-WNTDKBF" />
		</html>
	);
}
