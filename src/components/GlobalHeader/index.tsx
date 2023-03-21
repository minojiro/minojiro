import { component$ } from "@builder.io/qwik";

export default component$(({ isToUp }: { isToUp: boolean }) => {
  return (
    <header class={`py-10 sticky top-0 md:py-24 ${isToUp ? "" : "collapse"}`}>
      <div class="px-5 md:px-0 font-handwrite flex">
        <div class="flex-1">
          <h1 class="font-bold">
            <a href="/">minoJiro photographs</a>
          </h1>
          <p>
            contact me on{" "}
            <a
              href="https://www.instagram.com/the_minojiro/"
              rel="noopener"
              target="_blank"
              class="underline"
            >
              Instagram
            </a>
            .
          </p>
        </div>

        <p>
          <a href="/profile/" class="underline">
            profile
          </a>
        </p>
      </div>
    </header>
  );
});
