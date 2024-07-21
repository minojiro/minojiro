import { getPhotoPosts } from "@/repositories/photos";
import { PhotoList } from "@/components/PhotoList";

export default async function Home() {
	const photos = await getPhotoPosts();
	return (
		<main className="">
			<PhotoList photos={photos} />
		</main>
	);
}
