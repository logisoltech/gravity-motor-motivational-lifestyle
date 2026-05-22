"use client";

import { useState } from "react";
import Image from "next/image";

const heading =
  "text-left text-xl font-bold uppercase leading-tight tracking-wide text-neutral-950 sm:text-2xl md:text-3xl";

const imageFrame =
  "relative h-56 w-full overflow-hidden rounded-3xl sm:h-64 md:h-72 lg:h-80";

export default function EnergyGallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section
        className="relative overflow-hidden bg-white pb-10 sm:pb-12 md:pb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)_minmax(0,1fr)] md:gap-4 lg:gap-5">
            <div className="flex min-w-0 flex-col">
              <h3 className={`${heading} mb-3 z-50 md:mb-4`}>
                Energy Exhibit
              </h3>

              <button
                type="button"
                onClick={() =>
                  setActiveImage({
                    src: "/scene.png",
                    alt: "Energy exhibit — isometric spiral tower and landscape",
                  })
                }
                className={`${imageFrame} group`}
              >
                <Image
                  src="/scene.png"
                  alt="Energy exhibit — isometric spiral tower and landscape"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 28vw"
                />
              </button>
            </div>

            <div className="flex min-w-0 flex-col">
              <h3 className={`${heading} mb-3 md:mb-4`}>
                <span className="block">Energy City</span>
                <span className="mt-1 block sm:mt-1.5">
                  Power Plants - Buildings
                </span>
              </h3>

              <button
                type="button"
                onClick={() =>
                  setActiveImage({
                    src: "/hero-bg.png",
                    alt: "Energy city with modern power plant building",
                  })
                }
                className={`${imageFrame} group`}
              >
                <Image
                  src="/hero-bg.png"
                  alt="Energy city with modern power plant building"
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </button>
            </div>

            <div className="flex min-w-0 flex-col">
              <h3 className={`${heading} mb-3 md:mb-4`}>How It Works</h3>

              <button
                type="button"
                onClick={() =>
                  setActiveImage({
                    src: "/straw.png",
                    alt: "How it works — straw and liquid diagram",
                  })
                }
                className={`${imageFrame} group`}
              >
                <Image
                  src="/straw.png"
                  alt="How it works — straw and liquid diagram"
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 28vw"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-5 w-12 bg-linear-to-r from-white via-white/75 to-transparent sm:w-20 md:w-28 lg:w-36"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-5 w-12 bg-linear-to-l from-white via-white/75 to-transparent sm:w-20 md:w-28 lg:w-36"
          aria-hidden
        />
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 z-10 text-4xl text-white transition hover:text-gray-300"
            aria-label="Close image"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-7xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}