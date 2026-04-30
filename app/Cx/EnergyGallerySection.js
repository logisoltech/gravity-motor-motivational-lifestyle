import Image from "next/image";

function ChevronLeftIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const heading =
  "text-left text-xl font-bold uppercase leading-tight tracking-wide text-neutral-950 sm:text-2xl md:text-3xl";

const imageFrame =
  "relative h-56 w-full overflow-hidden rounded-3xl sm:h-64 md:h-72 lg:h-80";

export default function EnergyGallerySection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)_minmax(0,1fr)] md:gap-4 lg:gap-5">
          {/* Energy Exhibit */}
          <div className="flex min-w-0 flex-col">
            <h3 className={`${heading} mb-3 z-50 md:mb-4`}>Energy Exhibit</h3>
            <div className={imageFrame}>
              <Image
                src="/scene.png"
                alt="Energy exhibit — isometric spiral tower and landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 28vw"
              />
              <button
                type="button"
                className="absolute top-1/2 left-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-neutral-950 shadow-md ring-1 ring-black/5 transition hover:bg-white md:left-3 md:size-10"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="size-5 md:size-6" />
              </button>
            </div>
          </div>

          {/* Energy City — hero (wider column on md+) */}
          <div className="flex min-w-0 flex-col">
            <h3 className={`${heading} mb-3 md:mb-4`}>
              <span className="block">Energy City</span>
              <span className="mt-1 block sm:mt-1.5">Power Plants - Buildings</span>
            </h3>
            <div className={imageFrame}>
              <Image
                src="/hero-bg.png"
                alt="Energy city with modern power plant building"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* How it works */}
          <div className="flex min-w-0 flex-col">
            <h3 className={`${heading} mb-3 md:mb-4`}>How It Works</h3>
            <div className={imageFrame}>
              <Image
                src="/straw.png"
                alt="How it works — straw and liquid diagram"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 28vw"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-neutral-950 shadow-md ring-1 ring-black/5 transition hover:bg-white md:right-3 md:size-10"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="size-5 md:size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* White haze — fades in from left / right edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-5 w-12 bg-linear-to-r from-white via-white/75 to-transparent sm:w-20 md:w-28 lg:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-5 w-12 bg-linear-to-l from-white via-white/75 to-transparent sm:w-20 md:w-28 lg:w-36"
        aria-hidden
      />
    </section>
  );
}
