"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate">
      <header className="inset-x-0 top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <nav
          aria-label="Global"
          className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-white tracking-tighter">
                JH<span className="text-amber-500">.</span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className="text-sm/6 font-semibold text-white hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm/6 font-semibold text-white hover:text-amber-400"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-sm/6 font-semibold text-white hover:text-amber-400"
            >
              Projects
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/Jonathan_Hill_Resume.pdf"
              download
              className="text-sm font-semibold text-white border border-amber-500/50 px-4 py-2 rounded-md hover:bg-amber-500/10 transition-all"
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
          {/* Backdrop Blur overlay when menu is active */}
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

          {/* Updated DialogPanel Styling */}
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-950/95 backdrop-blur-md p-6 sm:max-w-sm border-l border-zinc-900 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-1.5 p-1.5"
              >
                <span className="text-xl font-bold text-white tracking-tighter">
                  JH<span className="text-amber-500">.</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-800">
                {/* Vertical Link Stack Layout */}
                <div className="space-y-3 py-6">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-all"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-all"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 px-3 text-base font-semibold text-white hover:bg-zinc-900 hover:text-amber-400 transition-all"
                  >
                    Projects
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="/Jonathan_Hill_Resume.pdf"
                    download
                    className="inline-block text-center w-full text-sm font-semibold text-white border border-amber-500/50 px-4 py-3 rounded-md hover:bg-amber-500/10 transition-all"
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
