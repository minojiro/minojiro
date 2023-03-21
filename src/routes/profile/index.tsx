import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import GlobalHeader from "../../components/GlobalHeader";

const ProfileData = component$(
  ({ label, schemaItemProp }: { label: string; schemaItemProp?: string }) => {
    return (
      <dl class="flex mt-5">
        <dt class="w-32 font-bold">{label}</dt>
        <dd itemProp={schemaItemProp}>
          <Slot />
        </dd>
      </dl>
    );
  }
);

export default component$(() => {
  return (
    <div class="max-w-5xl mx-auto max-w-photoContainer text-gray-800">
      <GlobalHeader isToUp={true} />
      <main class="text-sm px-5" itemScope itemType="https://schema.org/Person">
        <ProfileData label="name" schemaItemProp="name">
          <span lang="en">minoJiro</span> (<span lang="ja">みのじろー</span>)
        </ProfileData>
        <ProfileData label="real name">
          <span lang="en">
            <span itemProp="familyName">Mino</span>{" "}
            <span itemProp="givenName">Ryuichi</span>
          </span>{" "}
          (
          <span lang="ja">
            <span itemProp="familyName">三野</span>{" "}
            <span itemProp="givenName">龍一</span>
          </span>{" "}
          )
        </ProfileData>
        <ProfileData label="occupation" schemaItemProp="jobTitle">
          commercial photographer
        </ProfileData>
        <ProfileData label="birthday" schemaItemProp="birthDate">
          <time dateTime="10-12">October 12th</time>
        </ProfileData>
        <ProfileData label="location" schemaItemProp="homeLocation">
          Tokyo, Japan
        </ProfileData>
        <ProfileData label="from" schemaItemProp="birthPlace">
          Nagoya-shi, Aichi, Japan
        </ProfileData>
        <ProfileData label="clients">
          <ul>
            <li>Kyodo Shuppan</li>
            <li>Flandre</li>
            <li>Adesso</li>
            <li>Hatake Aoyama</li>
            <li>Aishin Komuten</li>
            <li>Matsukuru</li>
            <li>Nakahara Clinic</li>
            <li>etc..</li>
          </ul>
        </ProfileData>
        <ProfileData label="sns accounts">
          <ul>
            <li>
              <a
                class="underline"
                target="_blank"
                rel="noopener"
                href="https://www.twitter.com/the_minojiro/"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                class="underline"
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/the_minojiro/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                class="underline"
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/minoJiro/"
              >
                Facebook
              </a>
            </li>
          </ul>
        </ProfileData>

        <ProfileData label="favorite">
          <ul>
            <li>
              Film director{" "}
              <a
                href="https://www.imdb.com/name/nm0466153/"
                target="_blank"
                rel="noopener"
                class="underline"
              >
                Koreeda Hirokazu
              </a>
            </li>
            <li>
              Illustrator{" "}
              <a
                href="https://twitter.com/tw__yu"
                target="_blank"
                rel="noopener"
                class="underline"
              >
                Yu
              </a>
            </li>
            <li>
              Music Band{" "}
              <a
                href="https://open.spotify.com/artist/6SMP2z9rViDs6YNCXtCj29"
                target="_blank"
                rel="noopener"
                class="underline"
              >
                Cymbals
              </a>
            </li>
            <li>
              Music Band{" "}
              <a
                href="https://open.spotify.com/artist/1uyiv8HlmZlrvdY9oGP8hs"
                target="_blank"
                rel="noopener"
                class="underline"
              >
                The Natsuyasumi Band
              </a>
            </li>
          </ul>
        </ProfileData>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "profile | minoJiro photographs",
  meta: [
    {
      name: "description",
      content: "minoJiro's profile and history",
    },
  ],
};
