import Image from "next/image";
import Link from "next/link";
import logoImage from "./logo.png";
import { fontEn1 } from "@/constants/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const GlobalHeader = () => {
	return (
		<header className="flex items-center text-primary">
			<h1 className="flex-1">
				<Link
					href="/"
					className="w-32 md:w-40 block text-3xl"
					title="みのじろー"
				>
					<Image
						src={logoImage}
						width={771}
						height={161}
						alt="みのじろー（minoJiro）"
						className="w-full h-auto"
					/>
				</Link>
			</h1>
			<nav>
				<ul className={`flex gap-4 items-center ${fontEn1.className}`}>
					<li>
						<Link href="/profile" title="みのじろー プロフィール">
							profile
						</Link>
					</li>
					<li>
						<Link
							href="https://www.instagram.com/_minojiro"
							title="みのじろー instagram"
							target="_blank"
							rel="noopener"
							className="block w-5"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</Link>
					</li>
					<li>
						<Link
							href="https://x.com/the_minojiro"
							title="みのじろー twitter(X)"
							target="_blank"
							rel="noopener"
							className="block w-5"
						>
							<FontAwesomeIcon icon={faXTwitter} />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
