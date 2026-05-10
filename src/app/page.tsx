import {
  Code2,
  Database,
  Layout,
  TestTube2,
  Server,
  Terminal,
  Smartphone,
  Cpu,
  Check,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 animate-fade-in opacity-0">
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Opportunities
        </div> */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
            Hi, I'm <span className="text-white font-bold">Alok Kumar</span> <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_infinite]">👋</span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl">
            Building scalable <span className="text-gradient">automation frameworks</span> and{" "}
            <span className="text-gradient">end-to-end test solutions</span>.
          </h1>
        </div>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          I am an SDET specializing in test automation with Playwright, Selenium, Appium, and TypeScript.
          I create robust end-to-end solutions that ensure rigorous software quality and reliability.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#experience" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-500/25">
            View Experience
          </a>
          <div className="flex items-center gap-4 px-4">
            <a href="https://github.com/alokkr016" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/alokkr016/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:alokraj016@outlook.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="animate-fade-in opacity-0 stagger-1 scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-indigo-400" />
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>
        <div className="glass-card p-8 text-lg text-slate-300 leading-relaxed max-w-4xl">
          <p>
            I am an SDET with deep experience in automation engineering, quality assurance, and end-to-end testing methodologies.
            My core focus lies in architecting and building scalable automation frameworks from the ground up.
            I believe in full ownership of projects, a strong debugging mindset, and ensuring software quality through innovative test architecture.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="animate-fade-in opacity-0 stagger-2 scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl font-bold text-white">Core Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="glass-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Languages</h3>
            <ul className="flex flex-col gap-2 text-slate-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Java (Advanced)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> JavaScript & TypeScript</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Python (Familiar)</li>
            </ul>
          </div>

          {/* Test Automation */}
          <div className="glass-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
              <TestTube2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Test Automation</h3>
            <ul className="flex flex-col gap-2 text-slate-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-500" /> Playwright</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-500" /> Selenium</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-500" /> Appium (iOS/Android)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-500" /> E2E & API Testing</li>
            </ul>
          </div>

          {/* Web Technologies */}
          <div className="glass-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Web Technologies</h3>
            <ul className="flex flex-col gap-2 text-slate-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> React</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> HTML5 & CSS3</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Material UI (MUI)</li>
            </ul>
          </div>

          {/* Databases & Tools */}
          <div className="glass-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-2">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Databases & Tools</h3>
            <ul className="flex flex-col gap-2 text-slate-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> REST API Integration</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Maven</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="animate-fade-in opacity-0 stagger-3 scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="w-8 h-8 text-pink-400" />
          <h2 className="text-3xl font-bold text-white">Key Experience</h2>
        </div>
        <div className="glass-card p-8 border-l-4 border-l-indigo-500">
          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Terminal className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">SDET II & SDET <span className="text-slate-400 font-normal">@ Quince</span></h4>
                <p className="text-sm text-indigo-300 font-medium mt-1">Dec 2024 - Present</p>
                <p className="text-slate-400 mt-2">Spearheading quality engineering initiatives, optimizing automation architectures, and ensuring seamless delivery of high-quality software products.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Smartphone className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">SDET <span className="text-slate-400 font-normal">@ CRED</span></h4>
                <p className="text-sm text-indigo-300 font-medium mt-1">Apr 2024 - Oct 2024</p>
                <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
                  <li>Led the development of a scalable automation framework using parallel execution methodologies.</li>
                  <li>Implemented CI/CD pipelines for seamless integration of mobile automation workflows.</li>
                  <li>Built mobile and web automation frameworks from scratch and refactored legacy systems.</li>
                  <li>Designed infrastructure to support robust automation processes.</li>
                </ul>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Server className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Software Engineer in Test <span className="text-slate-400 font-normal">@ Cognizant</span></h4>
                <p className="text-sm text-indigo-300 font-medium mt-1">Feb 2023 - Apr 2024</p>
                <p className="text-slate-400 mt-2">Developed and maintained automated testing pipelines, and integrated robust E2E test architectures.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Tech Track Intern <span className="text-slate-400 font-normal">@ HighRadius</span></h4>
                <p className="text-sm text-indigo-300 font-medium mt-1">Jan 2022 - Apr 2022</p>
                <p className="text-slate-400 mt-2">Gained foundational experience in software development and technical problem solving.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="animate-fade-in opacity-0 stagger-4 mb-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">My Strengths</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Strong Problem Solving", "Quick Learner", "Framework Architecture", "Full Ownership", "Debugging Mindset"].map((strength, index) => (
            <div key={index} className="px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 font-medium hover:border-indigo-500/50 hover:bg-slate-800 transition-colors cursor-default">
              {strength}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
