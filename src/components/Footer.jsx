export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-900 dark:text-white font-bold text-xl tracking-tighter">
          JH<span className="text-amber-500">.</span>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/jonathan-hill32/"
            target="_blank"
            className="text-zinc-500 hover:text-amber-500 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jonhill25b"
            target="_blank"
            className="text-zinc-500 hover:text-amber-500 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.credly.com/users/jonathan-hill.f57b2999/badges#credly"
            target="_blank"
            className="text-zinc-500 hover:text-amber-500 text-sm transition-colors"
          >
            Credly
          </a>
        </div>

        <p className="text-zinc-500 dark:text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} Jonathan Hill. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
