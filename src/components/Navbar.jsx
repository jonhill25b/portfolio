"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative isolate">
      <header className="inset-x-0 top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-900 transition-colors duration-300">
        <nav
          aria-label="Global"
          className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter">
                JH<span className="text-amber-500">.</span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className="text-sm/6 font-semibold text-zinc-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm/6 font-semibold text-zinc-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-sm/6 font-semibold text-zinc-700 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Projects
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
            <a
              href="/Jonathan_Hill_Resume.pdf"
              download
              className="text-sm font-semibold text-zinc-700 dark:text-white border border-amber-500/50 px-4 py-2 rounded-md hover:bg-amber-500/10 transition-all"
            >
              Download Resume <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Flyout Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-zinc-950/95 backdrop-blur-md p-6 sm:max-w-sm border-l border-gray-200 dark:border-zinc-900 shadow-2xl transition-colors duration-300">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-1.5 p-1.5"
              >
                <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter">
                  JH<span className="text-amber-500">.</span>
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-zinc-600 dark:text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 dark:divide-zinc-800">
                <div className="space-y-3 py-6">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-amber-500 dark:hover:text-amber-400 transition-all"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-amber-500 dark:hover:text-amber-400 transition-all"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-amber-500 dark:hover:text-amber-400 transition-all"
                  >
                    Projects
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="/Jonathan_Hill_Resume.pdf"
                    download
                    className="inline-block text-center w-full text-sm font-semibold text-zinc-700 dark:text-white border border-amber-500/50 px-4 py-3 rounded-md hover:bg-amber-500/10 transition-all"
                  >
                    Download Resume <span aria-hidden="true">&darr;</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
