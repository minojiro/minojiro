import Image from "next/image";
import logoImage from "./profile.jpg";
import type { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPerson,
	faCat,
	faDiamond,
	faBowlRice,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

const ProfileData = (props: PropsWithChildren<{ title: string }>) => {
	return (
		<dl className="">
			<dt className="font-bold mb-4">{props.title}</dt>
			<dd>{props.children}</dd>
		</dl>
	);
};

export default async function Home() {
	return (
		<main className="flex gap-8 items-start flex-wrap max-w-3xl mx-auto">
			<Image
				src={logoImage}
				alt=""
				width={320}
				height={320}
				className="flex-1"
			/>
			<div className="flex-[999] min-w-[50%]">
				<h2 className="font-bold mb-5 text-lg">みのじろー（minoJiro）</h2>
				<div className="grid gap-5">
					<p>
						愛知県出身のフォトグラファー。
						<br />
						専門学校東京ビジュアルアーツ
						コマーシャルフォト専攻卒業後、フリーランスとして活動中。写真集「夏目あおいのなつやすみ」出版、合同写真展「ポートレート専科」参加。
					</p>
					<ProfileData title="撮れるもの">
						<ul>
							{[
								{ icon: faPerson, label: "人物" },
								{ icon: faCat, label: "ペット" },
								{ icon: faDiamond, label: "小物" },
								{ icon: faBowlRice, label: "食品" },
								{ icon: faHouse, label: "インテリア" },
							].map((item) => (
								<li key={item.label} className="flex items-center gap-2">
									<p className="w-4 block">
										<FontAwesomeIcon icon={item.icon} />
									</p>
									<p>{item.label}</p>
								</li>
							))}
							<li>など</li>
						</ul>
					</ProfileData>
				</div>
			</div>
		</main>
	);
}
