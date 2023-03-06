import { component$, useTask$, useBrowserVisibleTask$,useSignal } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { initializeGtm } from './lib/gtm';
import { getPhotoPosts } from './api/photos';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  const ogImage = useSignal('')
  const siteName = 'minoJiro （みのじろー）の写真作品集'
  useTask$(async () => {
    const [photo] = await getPhotoPosts()
    ogImage.value = photo?.src || ''
  })
  useBrowserVisibleTask$(() => initializeGtm())

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <title>{siteName}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minojiro.com" />
        <meta property="og:image" content={ogImage.value} />
        <meta property="og:description" content={siteName}/>
        <meta property="og:locale" content="ja_JP" />
        <meta name="description" content={siteName} />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body lang="ja" class="font-base text-lg">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNTDKBF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
