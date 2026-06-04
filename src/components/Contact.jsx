"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
          Next Steps
        </h2>
        <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8 transition-colors duration-300">
          Available for <span className="text-amber-500">New Missions.</span>
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
          I am currently transitioning from military service and seeking
          professional opportunities in cybersecurity and software engineering.
          If you are looking for a disciplined,{" "}
          <span className="font-bold text-zinc-800 dark:text-zinc-200">TS/SCI cleared</span>{" "}
          professional to join your team, let is connect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-md transition-all shadow-lg shadow-amber-900/20"
          >
            Open Contact Form
          </button>

          <a
            href="mailto:jhill.dev32@gmail.com"
            className="w-full sm:w-auto border border-zinc-300 dark:border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold py-4 px-10 rounded-md transition-all"
          >
            Direct Email
          </a>
        </div>

        {/* Modal Logic */}
        <Transition show={isOpen} as="div">
          <Dialog onClose={() => setIsOpen(false)} className="relative z-[100]">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
            </TransitionChild>

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-colors duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
                      Send a Message
                    </h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      &times;
                    </button>
                  </div>

                  <form
                    action="https://formspree.io/f/mojrolga"
                    method="POST"
                    className="space-y-4 text-left"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md py-2 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md py-2 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors duration-300"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 rounded-md transition-all"
                    >
                      Send to Jonathan
                    </button>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
}
