const sites = [
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
];

const roles = [
  {
    when: "Dec 2024 — Present",
    title: "SDET II & SDET",
    place: "Quince",
    point: "Playwright for the web product. Appium for iOS and Android.",
  },
  {
    when: "Apr 2024 — Oct 2024",
    title: "SDET",
    place: "CRED",
    point: "Appium for mobile. Web and mobile automation, parallel runs, and CI for the phone.",
  },
  {
    when: "Feb 2023 — Apr 2024",
    title: "Software Engineer in Test",
    place: "Cognizant",
    point: "Selenium for the UI. REST Assured for the APIs.",
  },
  {
    when: "Jan 2022 — Apr 2022",
    title: "Tech Track Intern",
    place: "HighRadius",
    point: "First stretch of building software and finding where it breaks.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 sm:px-8">
      <header className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 py-6 text-sm">
        <a href="#top" className="font-medium tracking-tight text-paper">
          Alok Kumar
        </a>
        <nav className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 text-mute sm:w-auto sm:justify-end">
          <a className="hover:text-paper" href="#testing">
            Testing
          </a>
          <a className="hover:text-paper" href="#building">
            Building
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
          <h1 className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl">
            Testing is the day job. Building is the hobby.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            I test web and mobile software at work. The sites are what I build on
            my own time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#testing"
              className="inline-flex h-10 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink"
            >
              Day job
            </a>
            <a
              href="#building"
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-paper"
            >
              Hobby
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

        <section id="testing" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Testing · day job
          </h2>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mute">
            At Quince I use Playwright for the browser and Appium for iOS and
            Android. At CRED it was Appium. At Cognizant it was Selenium for the
            UI and REST Assured for the APIs.
          </p>
        </section>

        <section id="building" className="scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
              Building · hobby
            </h2>
            <a
              href="https://apps.alokkumar.tech"
              className="text-sm text-mute underline decoration-line underline-offset-4 hover:text-paper"
            >
              apps.alokkumar.tech
            </a>
          </div>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {sites.map((site) => (
              <li key={site.href}>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="text-lg tracking-tight group-hover:underline">{site.name}</span>
                  <span className="max-w-md text-sm leading-relaxed text-mute sm:text-right">
                    {site.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Experience
          </h2>
          <ol className="mt-8 flex flex-col gap-10">
            {roles.map((role) => (
              <li key={role.place} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
                <p className="font-mono text-xs text-mute">{role.when}</p>
                <div>
                  <h3 className="text-lg tracking-tight">
                    {role.title}
                    <span className="text-mute"> · {role.place}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{role.point}</p>
                </div>
              </li>
            ))}
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
