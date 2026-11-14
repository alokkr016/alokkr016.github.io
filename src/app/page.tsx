const practice = [
  {
    kicker: "01",
    title: "Web and mobile, one harness",
    body: "Playwright and Selenium for the browser. Appium for iOS and Android. The framework is built to scale: parallel runs, shared fixtures, and the same idea of a test on a phone and on a site.",
  },
  {
    kicker: "02",
    title: "Local, regional, experimental",
    body: "A suite that can run on a laptop, across regions, or as an experiment. The same check can stay small while you are unsure, then run everywhere once it is trusted.",
  },
  {
    kicker: "03",
    title: "Visual regression",
    body: "A tool that treats a layout change as a review, not a silent drift. Baselines, diffs, and a place to decide whether the picture should change.",
  },
  {
    kicker: "04",
    title: "AI-driven testing",
    body: "Models help aim the suite: what to cover, what broke, and how to say it. The failure still has to be something a person can read and rerun.",
  },
];

const tools = [
  "Playwright",
  "Selenium",
  "Appium",
  "TypeScript",
  "Java",
  "AI-assisted tests",
];

const products = [
  {
    name: "Namma Metro",
    href: "https://namma-metro.alokkumar.tech",
    note: "Bengaluru’s metro, from today through Phase 3.",
  },
  {
    name: "Gather",
    href: "https://gather.alokkumar.tech",
    note: "Split a bill and see who owes what.",
  },
  {
    name: "Bridge",
    href: "https://bridge.alokkumar.tech",
    note: "Codes, clipboard, and calls across your own devices.",
  },
  {
    name: "Sift",
    href: "https://sift-eight-psi.vercel.app",
    note: "Keep or discard photos on the machine. Nothing uploaded.",
  },
  {
    name: "Watchpath",
    href: "https://watchpath.alokkumar.tech",
    note: "A watch order for films, with a checklist.",
  },
  {
    name: "Panchang",
    href: "https://panchang.alokkumar.tech",
    note: "Tithi, Rahu Kaal, and the day, for where you are.",
  },
  {
    name: "LicenseForge",
    href: "https://licenseforge.alokkumar.tech",
    note: "License keys for indie software.",
  },
  {
    name: "MindVault",
    href: "https://mindvault-one.vercel.app",
    note: "Notes that start on the device.",
  },
];

const roles = [
  {
    title: "SDET II & SDET",
    place: "Quince",
    when: "Dec 2024 — Present",
    points: [
      "Quality engineering for the product, with automation that keeps up with delivery.",
    ],
  },
  {
    title: "SDET",
    place: "CRED",
    when: "Apr 2024 — Oct 2024",
    points: [
      "Built mobile and web automation from scratch, and refactored what was already there.",
      "Parallel execution, and CI for the mobile workflows.",
    ],
  },
  {
    title: "Software Engineer in Test",
    place: "Cognizant",
    when: "Feb 2023 — Apr 2024",
    points: ["Automated pipelines and end-to-end coverage for the systems under test."],
  },
  {
    title: "Tech Track Intern",
    place: "HighRadius",
    when: "Jan 2022 — Apr 2022",
    points: ["First stretch of building software and finding where it breaks."],
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 sm:px-8">
      <header className="flex items-center justify-between gap-4 py-6 text-sm">
        <a href="#top" className="font-medium tracking-tight text-paper">
          Alok Kumar
        </a>
        <nav className="flex items-center gap-5 text-mute">
          <a className="hover:text-paper" href="#practice">
            Practice
          </a>
          <a className="hover:text-paper" href="#work">
            Work
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
            Software development engineer in test
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl">
            I build the tests, then I build the product.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            A few of the products are live. The rest of this page is the work behind them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-10 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink"
            >
              See the apps
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

        <section aria-label="Tools">
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mute"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        <section id="practice" className="scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Practice
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {practice.map((item) => (
              <article key={item.title} className="bg-ink p-6 sm:p-8">
                <p className="font-mono text-xs text-mute">{item.kicker}</p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
              Shipped
            </h2>
            <a
              href="https://apps.alokkumar.tech"
              className="text-sm text-mute underline decoration-line underline-offset-4 hover:text-paper"
            >
              apps.alokkumar.tech
            </a>
          </div>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {products.map((product) => (
              <li key={product.href}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="text-lg tracking-tight group-hover:underline">
                    {product.name}
                  </span>
                  <span className="text-sm text-mute sm:text-right">{product.note}</span>
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
                  <ul className="mt-2 flex flex-col gap-1 text-sm leading-relaxed text-mute">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
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
