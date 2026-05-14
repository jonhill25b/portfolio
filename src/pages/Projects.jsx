import Contact from '../components/Contact';

const allProjects = [
  {
    title: "Insight Onboarding System",
    description:
      "A secure IT equipment procurement and access management portal built for streamlined employee onboarding, currently used by Red Cup IT for equipment deployment.",
    tech: ["React", "MySQL", "Tailwind"],
    image: "/project-one.jpg", 
  },
  {
    title: "CMMC Compliance Tracker",
    description:
      "A dashboard designed to track progress toward Department of Defense cybersecurity maturity certification, ensuring 98% compliance across 4,000+ user accounts.",
    tech: ["React", "Secure API", "Node.js"],
    image: "/project-two.jpg",
  },
  {
    title: "PowerShell Automation Suite",
    description:
      "A collection of automated scripts developed to monitor user accounts and reduce administrative delays for global remote operations.",
    tech: ["PowerShell", "Automation", "Security"],
    image: "/project-three.jpg",
  },
  {
    title: "Inventory Asset Manager",
    description:
      "A secure management system designed to maintain absolute accountability for $1.2M in high-value IT infrastructure with real-time audit logs.",
    tech: ["MySQL", "React", "Authentication"],
    image: "/project-four.jpg",
  }
];

export default function Projects() {
  return (
    <div className="relative isolate pt-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        
        {/* Page Header */}
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            Technical Portfolio
          </h2>
          <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
            Proven <span className="text-amber-500">Solutions.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            From secure military systems to modern full-stack applications, 
            these projects reflect my focus on technical precision, security, and scalability.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-zinc-700"
            >
              <div className="aspect-video bg-zinc-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                   <span className="text-zinc-500 text-xs italic">Project Visual Coming Soon</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    View Case Study &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrated Contact Section */}
      <Contact />
    </div>
  );
}