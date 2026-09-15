"use client";

import { useEffect, useState } from "react";
import { TbMessageCircle } from "react-icons/tb";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e8b93b] text-neutral-900 shadow-lg transition-colors hover:bg-[#f0c65a] sm:h-[46px] sm:w-[46px]"
        aria-label="Contact"
        style={{ backgroundColor: "#e8b93b" }}
      >
        <TbMessageCircle className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-address-title"
            className="relative w-full max-w-sm rounded-2xl bg-white px-6 py-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 flex size-8 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close"
            >
              ×
            </button>

            <div
              className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full text-neutral-900"
              style={{ backgroundColor: "#e8b93b" }}
            >
              <TbMessageCircle className="size-7" strokeWidth={1.75} aria-hidden />
            </div>

            <h2
              id="contact-address-title"
              className="text-sm font-semibold uppercase tracking-wide text-neutral-500"
            >
              Contact Address
            </h2>
            <p className="mt-3 text-xl font-bold tracking-wide text-neutral-950 sm:text-2xl">
              56 ST. NY. NY. 10019
            </p>
          </div>
        </div>
      )}
    </>
  );
}
