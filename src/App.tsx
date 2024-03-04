import { For } from "solid-js";
import {
  courses,
  profile,
  projects,
  skills,
  firstName,
  lastName,
  info,
} from "./content";

function App() {
  return (
    <>
      <main class="py-4">
        <section class="py-8">
          <div class="container">
            <div class="flex flex-col gap-y-4 items-center justify-center">
              <img
                class="h-60 w-60 rounded-full select-none mb-4"
                src="/images/me.png"
                alt="me"
              />
              <h1 class="font-medium text-3xl">
                {firstName} <span class="text-blue-500">{lastName}</span>
              </h1>
              <ul class="flex flex-wrap justify-center w-4/5 gap-x-3 gap-y-2 text-lg">
                <For each={info}>
                  {({ name, text }) => (
                    <li>
                      <span class="text-blue-500 font-medium">{name}:</span>{" "}
                      {text}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </section>

        <section class="py-4">
          <div class="container">
            <h2 class="title mb-2">Profile</h2>
            <For each={profile}>{(text) => <p class="mb-2">{text}</p>}</For>
          </div>
        </section>

        <section class="py-4">
          <div class="container">
            <h2 class="title mb-2">Skills</h2>
            <ul class="flex flex-col gap-y-1 list-inside list-disc">
              <For each={skills}>
                {({ name, text }) => (
                  <li>
                    <strong class="text-md">{name}:</strong>{" "}
                    <span class="text-sm">{text}</span>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>

        <section class="py-4">
          <div class="container">
            <h2 class="title mb-2">Education and Courses</h2>
            <ul class="flex flex-col gap-y-2 list-inside list-disc">
              <For each={courses}>
                {({ name, link }) => (
                  <li>
                    <a
                      class="underline hover:no-underline"
                      href={link}
                      target="_blank"
                    >
                      {name}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>

        <section class="py-4">
          <div class="container">
            <h2 class="title mb-2">Experience</h2>
            <div class="flex flex-wrap justify-center md:*:basis-[calc(50%-.5rem)] gap-4">
              <For each={projects}>
                {({ name, source, href, picture }) => (
                  <div class="flex flex-col gap-4">
                    <div class="flex gap-2">
                      <h4>
                        Project <strong>`{name}`</strong>.
                      </h4>
                      <a
                        class="underline hover:no-underline"
                        target="_blank"
                        href={source}
                      >
                        Source Code
                      </a>
                    </div>
                    <a target="_blank" href={href}>
                      <img
                        class="object-cover aspect-video"
                        src={picture}
                        alt={name}
                      />
                    </a>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>
      </main>
      <footer class="py-4 text-center">{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
