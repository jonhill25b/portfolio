const featuredProjects = [
  {
    title: "Insight Onboarding System",
    description:
      "A secure IT equipment procurement and access management portal built for streamlined employee onboarding.",
    tech: ["React", "MySQL", "Tailwind"],
    image: "/project-one.jpg", // Placeholder for now
  },
  {
    title: "CMMC Compliance Tracker",
    description:
      "A dashboard designed to track progress toward Department of Defense cybersecurity maturity certification.",
    tech: ["React", "Secure API", "Node.js"],
    image: "/project-two.jpg",
  },
];

export default function ProjectPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">
              Portfolio Highlights
            </h2>
            <p className="text-3xl font-bold text-white">Selected Projects</p>
          </div>
          <a
            href="/projects"
            className="text-amber-500 hover:text-amber-400 font-semibold text-sm flex items-center gap-1 transition-all"
          >
            View all work <span>&rarr;</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-zinc-700"
            >
              <div className="aspect-video bg-zinc-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-amber-500 group-hover:text-amber-400 transition-colors"
                >
                  View Case Study &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
