import ProfilePicture from "../assets/ProfilePicture.png";
import Contact from "../components/Contact";

export default function About() {
  const workHistory = [
    {
      title: "Information Systems Team Lead",
      date: "Nov 2022 – Present",
      description:
        "Leading secure IT operations for 4,000+ users, ensuring 98% cybersecurity compliance and maintaining mission-critical global connectivity.",
    },
    {
      title: "Senior Information Technology Specialist",
      date: "Jan 2022 – Nov 2022",
      description:
        "Deployed departmental ticketing systems reducing errors by 50% and imaged 900+ computers for secure overseas deployment.",
    },
    {
      title: "IT Support Supervisor",
      date: "Feb 2020 – Jan 2022",
      description:
        "Developed PowerShell automation for user monitoring and maintained accountability for $1.2M in high-value IT infrastructure.",
    },
  ];

  return (
    <div className="relative isolate pt-32 bg-gray-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-24">
          <div className="md:col-span-1">
            <div className="relative group mx-auto max-w-[300px] md:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-zinc-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl transition-colors duration-300">
                <img
                  src={ProfilePicture}
                  alt="Jonathan Hill"
                  className="w-full h-full object-cover grayscale-[15%] contrast-110"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors duration-300">
              U.S. Army Veteran &{" "}
              <span className="text-amber-500">IT Professional</span>
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-4 transition-colors duration-300">
              With over 5 years of experience in the U.S. Army, my career has
              been defined by technical discipline and operational excellence.
              Recently, I transitioned into the civilian sector after graduating
              with a{" "}
              <span className="text-zinc-900 dark:text-white font-bold">
                B.S. in Information Technology
              </span>
              .
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
              My mission is to leverage my background in{" "}
              <span className="text-zinc-800 dark:text-white">
                Active TS/SCI cleared operations
              </span>{" "}
              to build secure, scalable solutions in the cybersecurity and
              software engineering space.
            </p>
          </div>
        </div>

        {/* Work History: Creative Timeline */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 flex items-center gap-4 transition-colors duration-300">
            Professional Evolution{" "}
            <span className="h-px flex-1 bg-zinc-300 dark:bg-zinc-800 transition-colors duration-300"></span>
          </h2>
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-300 dark:before:bg-zinc-800 transition-colors duration-300"
              >
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <span className="text-sm font-mono text-amber-500/80">
                    {job.date}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl transition-colors duration-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrated Contact Section */}
      <Contact />
    </div>
  );
}
