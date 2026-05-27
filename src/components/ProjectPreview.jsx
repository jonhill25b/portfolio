import TaskManagerIMG from "../assets/task-manager-img.png";
import AIChatIMG from "../assets/ai-client-img.png";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "AI Client Console",
    description:
      "A stateful, responsive AI chat interface featuring secure asynchronous message execution, locally persisted conversational logs, and custom-tuned linear dark mode styling.",
    tech: ["React", "Node.js", "OpenAI API", "Tailwind v4", "Axios"],
    image: AIChatIMG,
    liveLink: "https://ai-chat-client-k9t7.onrender.com",
    gitLink: "https://github.com/jonhill25b/ai-client",
  },
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
          <Link
            to="/projects"
            className="text-amber-500 hover:text-amber-400 font-semibold text-sm flex items-center gap-1 transition-all"
          >
            View all work <span>&rarr;</span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-zinc-700"
            >
              {/* Dynamic Image Wrapper Container */}
              <div className="aspect-video bg-zinc-950 overflow-hidden relative flex items-center justify-center p-4">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Content Card Body */}
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
                
                {/* Clean, Segmented Call to Action Layout */}
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
    </section>
  );
}