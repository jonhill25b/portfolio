import Contact from '../components/Contact';
import TaskManagerIMG from '../assets/task-manager-img.png';

const allProjects = [
  {
    title: "Task Engine",
    description:
      "A secure, production-grade task allocation system engineered with full CRUD operations and restricted endpoints. Features custom JSON Web Token (JWT) user authentication sessions and a responsive layout grid.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind v4"],
    image: TaskManagerIMG,
    liveLink: "https://task-manager-1-8zfg.onrender.com",
    gitLink: "https://github.com/jonhill25b/Task-Manager",
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
            <div className="aspect-video bg-zinc-950 overflow-hidden relative flex items-center justify-center p-4">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl group-hover:scale-102 transition-transform duration-500"
              />
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
                
                {/* INTERACTIVE LINK ACTIONS */}
                <div className="flex gap-6 items-center border-t border-zinc-800/60 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Launch Application &rarr;
                  </a>
                  {project.gitLink !== "#" && (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      Source Code
                    </a>
                  )}
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