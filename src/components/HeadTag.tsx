import { component$, useTask$, useSignal } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import { getPhotoPosts } from "../api/photos";

export default component$(() => {
  const head = useDocumentHead();
  const ogImage = useSignal("");
  useTask$(async () => {
    const [photo] = await getPhotoPosts();
    ogImage.value = photo?.src || "";
  });

  return (
    <head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <title>{head.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="og:site_name" content={head.title} />
      <meta property="og:title" content={head.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://minojiro.com" />
      <meta property="og:image" content={ogImage.value} />
      <meta property="og:description" content={head.title} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="description" content={head.title} />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </head>
  );
});
