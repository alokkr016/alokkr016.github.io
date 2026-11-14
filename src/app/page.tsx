const web = [
  {
    name: "Namma Metro",
    href: "https://namma-metro.alokkumar.tech",
    note: "Bengaluru’s metro, from what is open today through Phase 3.",
  },
  {
    name: "Gather",
    href: "https://gather.alokkumar.tech",
    note: "Split a bill with a group and see who owes what.",
  },
  {
    name: "Bridge",
    href: "https://bridge.alokkumar.tech",
    note: "SMS codes from Android to the Mac, over your own Wi-Fi, onto the clipboard.",
  },
  {
    name: "Sift",
    href: "https://sift-eight-psi.vercel.app",
    note: "Mark photos Keep or Noise. Scanning only reads files. Nothing is uploaded.",
  },
  {
    name: "Watchpath",
    href: "https://watchpath.alokkumar.tech",
    note: "Watch order for Marvel, Sony, X-Men, and DC, with a checklist on this device.",
  },
  {
    name: "Nourish",
    href: "https://nourish.alokkumar.tech",
    note: "A daily log for food, exercise, and weight.",
  },
  {
    name: "Panchang",
    href: "https://panchang.alokkumar.tech",
    note: "Tithi, Rahu Kaal, festivals, and muhurat for where you are.",
  },
  {
    name: "MindVault",
    href: "https://mindvault-one.vercel.app",
    note: "Local-first notes. Start with no account, or sign in to sync.",
  },
  {
    name: "LicenseForge",
    href: "https://licenseforge.alokkumar.tech",
    note: "License keys for indie software.",
  },
  {
    name: "Shiksha",
    href: "https://shiksha-portal-teal.vercel.app",
    note: "Interactive lessons for kids, including Sanskrit.",
  },
  {
    name: "Spring Boot",
    href: "https://learn-spring.vercel.app",
    note: "A visual path through Spring Boot, from Java basics to a running service.",
  },
];

const mac = [
  {
    name: "Hop",
    note: "Press Easy-Switch on an MX keyboard and the mouse follows to the same Mac. No Options+, no Solaar.",
  },
  {
    name: "StackLens",
    note: "Language mix of a local folder, by byte size. Also a Finder Quick Action and a Quick Look preview.",
  },
  {
    name: "Clicklist",
    note: "Pick which commands show up on a Finder folder’s right-click. Terminal and Warp start visible.",
  },
  {
    name: "Pixop",
    note: "Menu-bar image optimiser. Copy a large image, paste a smaller one.",
  },
  {
    name: "Clipt",
    note: "Text clipboard history. Swift UI, Rust core, SQLite on the machine. No network.",
  },
  {
    name: "Klipr",
    note: "Screenshots, scroll capture, annotation, and screen recording.",
  },
  {
    name: "Peek",
    note: "Any window as an always-on-top picture-in-picture. fn+P on the focused window.",
  },
  {
    name: "Beam",
    note: "Android on the Mac over Wi-Fi. Speaks the scrcpy 4.1 protocol and uses official adb.",
  },
  {
    name: "Emulyn",
    note: "Local API, CLI, and MCP for Android emulators and iOS simulators. adb and simctl only.",
  },
  {
    name: "Loupe",
    note: "A Figma frame next to the real page, on a phone or in Chrome, or two live pages against each other.",
  },
  {
    name: "PlayGen",
    note: "Record clicks in Chrome and export a Playwright test. Replay stays in that browser profile.",
  },
  {
    name: "Juno",
    note: "Hold a hotkey, talk, and the cleaned text lands in the app you were using. Runs on the Mac.",
  },
  {
    name: "Velo",
    note: "Press fn, speak, and polished text is typed where the cursor is. On-device recognition.",
  },
  {
    name: "Pulse",
    note: "Why the Mac feels slow, in plain language: CPU, memory, swap, disk, battery, thermals.",
  },
  {
    name: "vControl",
    note: "Volume, brightness, contrast, and input for a BenQ GW2790QT, from the menu bar, over DDC/CI.",
  },
  {
    name: "Vyoma",
    note: "A media capsule under the MacBook notch. Album art, a timeline, and volume.",
  },
  {
    name: "Glance",
    note: "Unlock the Mac by looking at it. The face check stays on the device.",
  },
  {
    name: "FlyBy",
    note: "A small pilot flies across the screen before a meeting on the Mac calendar.",
  },
  {
    name: "Googly",
    note: "Menu-bar eyes that follow the cursor, with a character you can rebuild piece by piece.",
  },
  {
    name: "Offset",
    note: "Google Drive as a disk in Finder. A file is read when an app opens it.",
  },
];

const phone = [
  {
    name: "Notch",
    note: "A Dynamic Island-style pill over the front camera. No internet permission. Notification text stays on the phone.",
  },
  {
    name: "Kharcha",
    note: "Daily spend from bank texts. The messages stay on the phone.",
  },
  {
    name: "OwnVPN",
    note: "Android client for an AWS Client VPN that signs in through Okta.",
  },
];

function Catalog({
  items,
}: {
  items: { name: string; note: string; href?: string }[];
}) {
  return (
    <ul className="mt-6 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item.name}>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-lg tracking-tight group-hover:underline">{item.name}</span>
              <span className="max-w-md text-sm leading-relaxed text-mute sm:text-right">
                {item.note}
              </span>
            </a>
          ) : (
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <span className="text-lg tracking-tight">{item.name}</span>
              <span className="max-w-md text-sm leading-relaxed text-mute sm:text-right">
                {item.note}
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-6 text-sm">
        <a href="#top" className="font-medium tracking-tight text-paper">
          Alok Kumar
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-mute">
          <a className="hover:text-paper" href="#web">
            Web
          </a>
          <a className="hover:text-paper" href="#mac">
            Mac
          </a>
          <a className="hover:text-paper" href="#phone">
            Phone
          </a>
          <a className="hover:text-paper" href="#practice">
            Practice
          </a>
          <a className="hover:text-paper" href="#experience">
            Experience
          </a>
          <a
            className="hover:text-paper"
            href="https://github.com/alokkr016"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-col gap-24 pt-10 sm:pt-16">
        <section className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Bengaluru
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl">
            Sites, menu-bar apps, and a few things for the phone.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            The websites are open. The Mac and Android apps stay on the machine.
            The index of live sites is at apps.alokkumar.tech.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#web"
              className="inline-flex h-10 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink"
            >
              See the sites
            </a>
            <a
              href="https://apps.alokkumar.tech"
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-paper"
            >
              Full index
            </a>
            <a
              href="mailto:alokraj016@outlook.com"
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-paper"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/alokkr016/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-paper"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="web" className="scroll-mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
              On the web
            </h2>
            <a
              href="https://apps.alokkumar.tech"
              className="text-sm text-mute underline decoration-line underline-offset-4 hover:text-paper"
            >
              apps.alokkumar.tech
            </a>
          </div>
          <Catalog items={web} />
        </section>

        <section id="mac" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            On the Mac
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
            Native menu-bar and desktop apps. Most of these repos are private, so
            the names and what they do are here, and the code stays on GitHub.
          </p>
          <Catalog items={mac} />
        </section>

        <section id="phone" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            On the phone
          </h2>
          <Catalog items={phone} />
        </section>

        <section id="practice" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Practice
          </h2>
          <article className="mt-8 rounded-2xl border border-line p-6 sm:p-8">
            <h3 className="text-xl font-medium tracking-tight">
              One suite for the site and the phone
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute">
              Playwright and Selenium for the browser. Appium for iOS and Android.
              Shared fixtures, parallel runs, and the same idea of a check on a
              page and on a device. It can stay on a laptop, run across regions, or
              go out as an experiment. A layout change comes back as a picture
              diff, and a person decides whether that picture should change. Models
              help choose what to cover and how to write what broke. The failure
              still has to be something you can read and rerun.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute">
              Three of the apps above came out of that work. PlayGen records a
              session in Chrome and writes a Playwright spec. Emulyn stands up
              Android emulators and iOS simulators on this Mac and answers over a
              local API. Loupe puts a Figma frame beside the page as it actually
              renders.
            </p>
          </article>
        </section>

        <section id="experience" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Experience
          </h2>
          <ol className="mt-8 flex flex-col gap-10">
            <li className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-xs text-mute">Dec 2024 — Present</p>
              <div>
                <h3 className="text-lg tracking-tight">
                  SDET II & SDET
                  <span className="text-mute"> · Quince</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  Quality engineering for the product, with automation that keeps up
                  with delivery.
                </p>
              </div>
            </li>
            <li className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-xs text-mute">Apr 2024 — Oct 2024</p>
              <div>
                <h3 className="text-lg tracking-tight">
                  SDET
                  <span className="text-mute"> · CRED</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  Mobile and web automation from scratch, and a refactor of what was
                  already there. Parallel runs, and CI for the mobile workflows.
                </p>
              </div>
            </li>
            <li className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-xs text-mute">Feb 2023 — Apr 2024</p>
              <div>
                <h3 className="text-lg tracking-tight">
                  Software Engineer in Test
                  <span className="text-mute"> · Cognizant</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  Automated pipelines and end-to-end coverage for the systems under
                  test.
                </p>
              </div>
            </li>
            <li className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-xs text-mute">Jan 2022 — Apr 2022</p>
              <div>
                <h3 className="text-lg tracking-tight">
                  Tech Track Intern
                  <span className="text-mute"> · HighRadius</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  First stretch of building software and finding where it breaks.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </main>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-mute">
        <p>Alok Kumar</p>
        <a className="hover:text-paper" href="mailto:alokraj016@outlook.com">
          alokraj016@outlook.com
        </a>
      </footer>
    </div>
  );
}
