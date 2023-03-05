import { component$, useSignal, useTask$, useBrowserVisibleTask$ } from '@builder.io/qwik';
import PhotoItem from '../components/PhotoItem';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { PhotoPost } from '../types';
import {getPhotoPosts} from '../api/photos'

const MIN_SCROLL_TOP = 50

export default component$(() => {
  const photoPosts = useSignal<PhotoPost[]>([])
  const isToUp = useSignal(true)
  useTask$(async () => {
    photoPosts.value = await getPhotoPosts()
  });
  useBrowserVisibleTask$(({track}) => {
    let lastScrollY = window.scrollY
    track(() => isToUp);
    window.addEventListener('scroll', () => {
      const { scrollY } = window
      isToUp.value = Math.max(MIN_SCROLL_TOP,lastScrollY) > scrollY
      lastScrollY = scrollY
    })
  })
  return (
    <div class="max-w-5xl mx-auto text-gray-800">
      <header class={`py-10 sticky top-0 md:py-24 ${isToUp.value ? '' : 'collapse'}`}>
        <div class="px-5 md:px-0">
          <h1 class="font-bold">minoJiro photographs</h1>
          <p>contact me on <a href="https://www.instagram.com/the_minojiro/" rel="noopener" target="_blank" class="underline">Instagram</a>.</p>
        </div>
      </header>
      <main class={`${isToUp.value ? '' : 'text-gray-300'}`}>
        <div class="flex flex-col gap-24">
          {photoPosts.value.map((item) => (<PhotoItem key={item.id} item={item} />))}
        </div>
      </main>
      <footer class="my-24 px-5 md:px-0">
        <p class="text-gray-300"><small>© minojiro ALL RIGHTS RESERVED</small></p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'minoJiro photographs',
  meta: [
    {
      name: 'description',
      content: 'minoJiro photographs',
    },
  ],
};
