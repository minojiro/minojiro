import { component$ } from "@builder.io/qwik";
import type { PhotoPost } from "../../types";

export default component$(({ item }: { item: PhotoPost }) => {
  return (
    <section class="gap-6 flex flex-col-reverse">
      <div class="px-5 md:px-0">
        <h2 class="font-bold mb-1">{item.modelName}</h2>
        <p class="text-sm">{item.staff}</p>
      </div>
      <picture>
        <source srcSet={`${item.src}?fm=webp`} type="image/webp" />
        <img
          src={item.src}
          alt=""
          class="object-contain w-full h-auto aspect-photo bg-gray-50"
          loading="lazy"
        />
      </picture>
    </section>
  );
});
