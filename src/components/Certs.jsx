import CCP from "../assets/ccp-cert.jpg";
import Security from "../assets/security.png";
import Cloud from "../assets/cloud.png";
import SecureCloud from "../assets/secure-cloud.png";
import HTML_CSS from "../assets/html-css.png";
import JS from "../assets/javascript.png";
import MySQL from "../assets/MySQL.png";
import ReactJS from "../assets/reactJS.png";

const certifications = [
  {
    name: "CMMC Certified Professional",
    issuer: "Cyber AB / Infosec",
    icon: <img src={CCP} alt="CCP Logo" />,
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    icon: <img src={Security} alt="Security+ Logo" />,
    link: "https://www.credly.com/badges/4e1bc4d7-23f2-4f2e-a483-c759f6ec4ada/public_url",
  },
  {
    name: "CompTIA Cloud+",
    issuer: "CompTIA",
    icon: <img src={Cloud} alt="Cloud+ Logo" />,
    link: "https://www.credly.com/badges/7c49855c-8fe6-41a3-9ed4-2c93ea0e0b63/public_url",
  },
  {
    name: "CompTIA Secure Cloud Professional",
    issuer: "CompTIA",
    icon: <img src={SecureCloud} alt="Secure Cloud Logo" />,
    link: "https://www.credly.com/badges/53968661-80ff-4a1d-8334-46e4b9c3f971/public_url",
  },
  {
    name: "HTML-CSS Web Designer",
    issuer: "CoITB",
    icon: <img src={HTML_CSS} alt="HTML-CSS Logo" />,
    link: "https://www.credly.com/badges/1f7e6aaa-7f54-45db-ac63-261fdffbaa3b/public_url",
  },
  {
    name: "JavaScript Professional Developer",
    issuer: "CoITB",
    icon: <img src={JS} alt="JavaScript Logo" />,
    link: "https://www.credly.com/badges/d33f5d68-d40b-4a39-8aab-d16805332c16/public_url",
  },
  {
    name: "MySQL Backend Developer",
    issuer: "CoITB",
    icon: <img src={MySQL} alt="MySQL Logo" />,
    link: "https://www.credly.com/badges/ca46b679-7804-4473-9f9c-1072f9bc246f/public_url",
  },
  {
    name: "React JS Framework Developer",
    issuer: "CoITB",
    icon: <img src={ReactJS} alt="ReactJS Logo" />,
    link: "https://www.credly.com/badges/49219db2-03dc-4807-a634-d48ef00677f3/public_url",
  },
];

export default function Certs() {
  const doubledCerts = [...certifications, ...certifications];

  return (
    <section className="pb-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            Technical Credentials & Validations
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            ACTIVE TS/SCI CLEARANCE
          </div>
        </div>

        <div className="relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <div className="flex whitespace-nowrap animate-scroll py-4">
            {doubledCerts.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-4 w-64 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-500 hover:scale-105 transition-all group cursor-pointer"
              >
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                  {cert.icon}
                </div>
                <h3 className="text-white font-bold truncate text-sm">
                  {cert.name}
                </h3>
                <p className="text-zinc-500 text-xs">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
