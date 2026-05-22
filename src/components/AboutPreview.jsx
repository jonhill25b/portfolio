import ProfilePicture from "../assets/ProfilePicture.png";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image/Visual */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-zinc-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
              <img
                src={ProfilePicture}
                alt="Jonathan Hill"
                className="w-full h-full object-cover grayscale-[10%] contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              Behind the Code
            </h2>
            <h3 className="text-3xl font-bold text-white mb-6">
              Bridging Military Precision with{" "}
              <span className="text-amber-500">Technical Innovation.</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              As a U.S. Army Veteran and recent{" "}
              <span className="font-bold text-zinc-200">
                B.S. in Information Technology
              </span>{" "}
              graduate, I specialize in managing complex enterprise
              architectures and secure network environments. My background
              revolves around high-stakes operations where security compliance
              and system reliability are non-negotiable.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▹</span>
                <span className="text-zinc-300 text-sm">
                  Managed secure access for{" "}
                  <span className="font-bold text-zinc-100">4,000+ users</span>{" "}
                  while maintaining a{" "}
                  <span className="font-bold text-zinc-100">
                    98% cybersecurity compliance
                  </span>{" "}
                  rate.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▹</span>
                <span className="text-zinc-300 text-sm">
                  Accountable for{" "}
                  <span className="font-bold text-zinc-100">
                    $1.2M in critical IT infrastructure
                  </span>{" "}
                  and the deployment of{" "}
                  <span className="font-bold text-zinc-100">
                    cloud-based Entra ID systems
                  </span>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▹</span>
                <span className="text-zinc-300 text-sm">
                  Expertly trained in full-stack development, from{" "}
                  <span className="font-bold text-zinc-100">
                    MySQL backend architecture
                  </span>{" "}
                  to{" "}
                  <span className="font-bold text-zinc-100">
                    ReactJS frontend design
                  </span>
                  .
                </span>
              </li>
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-500/50 text-amber-500 rounded-md font-semibold hover:bg-amber-500/10 transition-all"
            >
              Read My Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
