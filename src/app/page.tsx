import { getPhotoPosts } from "@/repositories/photos";
import { PhotoList } from "@/components/PhotoList";

export default async function Home() {
	const photos = getPhotoPosts();
	return (
		<main className="">
			<PhotoList photos={photos} />
		</main>
	);
}
