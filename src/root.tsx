import {
  component$,
  useTask$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { initializeGtm } from "./lib/gtm";
import { getPhotoPosts } from "./api/photos";
import HeadTag from "./components/HeadTag";

import "./global.css";

export default component$(() => {
  const ogImage = useSignal("");
  useTask$(async () => {
    const [photo] = await getPhotoPosts();
    ogImage.value = photo?.src || "";
  });
  useBrowserVisibleTask$(() => initializeGtm());

  return (
    <QwikCityProvider>
      <HeadTag />
      <body lang="en" class="font-base text-lg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNTDKBF"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
