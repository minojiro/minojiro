import { component$ } from '@builder.io/qwik';
import type { PhotoPost } from '../../types'

export default component$(({ item }: {item: PhotoPost}) => {
  return (
    <section>
      <img
        src={item.src}
        alt=""
        class="object-contain w-full h-auto aspect-photo bg-gray-50"
        loading="lazy"
      />
      <div class="mt-6 px-5 md:px-0">
        <h2 class="font-bold mb-1">{item.modelName}</h2>
        <p class="text-sm">{item.staff}</p>
      </div>
    </section>
  );
});
