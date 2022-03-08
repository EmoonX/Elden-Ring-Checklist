import type { NextPage } from "next";
import Head from "next/head";
import DarkModeToggle from "../components/darkModeToggle";
import CompleteList from "../components/completeList";
import { useState } from "react";

const Home: NextPage = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [currentTab, setCurrentTab] = useState<"Quests" | "Achievements">(
    "Quests"
  );

  return (
    <div className="container mx-auto">
      <Head>
        <title>Elden Ring Checklist</title>
        <meta
          name="description"
          content="A place to remember your progression in Elden Ring"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={prefix + "/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={prefix + "/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={prefix + "/favicon-16x16.png"}
        />
        <link rel="manifest" href={prefix + "/site.webmanifest"} />
        <link
          rel="mask-icon"
          href={prefix + "/safari-pinned-tab.svg"}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header>
        <h1 className="flex justify-center">Elden Ring Checklist</h1>
      </header>

      <nav>
        <div className="flex justify-center">
          <h3 className="mx-4">
            <button onClick={() => setCurrentTab("Quests")}>Quests</button>
          </h3>
          <h3 className="mx-4">
            <button onClick={() => setCurrentTab("Achievements")}>
              Achievements
            </button>
          </h3>
          <h3></h3>
        </div>
      </nav>

      <main>
        <DarkModeToggle />
        <CompleteList listName={currentTab} />
      </main>
      <footer className="flex justify-center">
        <span>
          Check out the project on{" "}
          <a
            className="text-elden-ring-green dark:text-elden-ring-gold"
            href="https://github.com/Gobluebro/Elden-Ring-Checklist"
          >
            Github
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
