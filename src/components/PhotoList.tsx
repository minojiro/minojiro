"use client";

import type { PhotoPost } from "@/repositories/photos";
import { useMasonry } from "./masonry";

const PhotoItem = ({ photo }: { photo: PhotoPost }) => {
	let alt = "";
	if (photo.modelName) alt += photo.modelName;
	if (photo.staff) alt += ` – ${photo.staff}`;

	const srcForSp = `${photo.src}?fm=webp&w=600`;
	const srcForPc = `${photo.src}?fm=webp`;
	const srcOriginal = photo.src;
	return (
		<div>
			<picture>
				<source srcSet={srcForSp} media="(max-width: 600px)" />
				<source srcSet={srcForPc} type="image/webp" />
				<img
					src={srcOriginal}
					alt={alt}
					className="w-full h-auto"
					loading="lazy"
				/>
			</picture>
		</div>
	);
};

export const PhotoList = ({ photos }: { photos: PhotoPost[] }) => {
	const { wrapperRef } = useMasonry();
	return (
		<div
			className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-start"
			ref={wrapperRef}
		>
			{photos.map((photo) => (
				<PhotoItem key={photo.id} photo={photo} />
			))}
		</div>
	);
};
