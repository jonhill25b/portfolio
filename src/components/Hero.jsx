export default function Hero() {
  return (
    <div className="relative isolate">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-32">

          <div className="mb-6 flex justify-center sm:mb-8">
            <div className="relative rounded-full px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-500 ring-1 ring-amber-500/30 text-center">
              Active TS/SCI Clearance
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl">
              <span className="text-zinc-900 dark:text-white transition-colors duration-300">
                Jonathan Hill
              </span>
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-zinc-600 dark:text-zinc-300 sm:text-xl/8 transition-colors duration-300">
              Transitioning U.S. Army Veteran and IT Specialist with 5+ years of
              experience. Focused on delivering secure enterprise-level
              solutions through modern development and cybersecurity compliance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="text-sm/6 font-semibold text-zinc-700 dark:text-white border border-zinc-300 dark:border-zinc-700 px-3.5 py-2.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
