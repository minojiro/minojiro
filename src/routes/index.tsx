import {
  component$,
  useSignal,
  useTask$,
  $,
  useOnWindow,
} from "@builder.io/qwik";
import PhotoItem from "../components/PhotoItem";
import GlobalHeader from "../components/GlobalHeader";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { PhotoPost } from "../types";
import { getPhotoPosts } from "../api/photos";

const MIN_SCROLL_TOP = 50;

export default component$(() => {
  const photoPosts = useSignal<PhotoPost[]>([]);
  const isToUp = useSignal(true);
  const lastScrollY = useSignal(0);
  useTask$(async () => {
    photoPosts.value = await getPhotoPosts();
  });
  useOnWindow(
    "scroll",
    $(() => {
      const { scrollY } = window;
      isToUp.value = Math.max(MIN_SCROLL_TOP, lastScrollY.value) > scrollY;
      lastScrollY.value = scrollY;
    })
  );
  return (
    <div class="max-w-5xl mx-auto max-w-photoContainer text-gray-800 font-handwrite">
      <GlobalHeader isToUp={isToUp.value} />
      <main class={`${isToUp.value ? "" : "text-gray-300"}`}>
        <div class="flex flex-col gap-24">
          {photoPosts.value.map((item) => (
            <PhotoItem key={item.id} item={item} />
          ))}
        </div>
      </main>
      <footer class="my-24 px-5 md:px-0">
        <p class="text-gray-300">
          <small>© minojiro ALL RIGHTS RESERVED</small>
        </p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "minoJiro photographs",
  meta: [
    {
      name: "description",
      content: "minoJiro photographs",
    },
  ],
};
