import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden"
      data-aos="fade-in"
      data-aos-duration="900"
    >
      {/* Full width, native 3:2 (1536×1024) — entire image, no side bars */}
      <div className="relative aspect-[3/2] w-full">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <a
        href="https://motivational-lifestyle.vercel.app/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Motivational Lifestyle"
      >
        <Image
          src="/logo.png"
          alt="Institutional Lifestyle"
          width={400}
          height={130}
          className="h-16 w-auto sm:h-[4.75rem] md:h-20 lg:h-24"
          priority
        />
      </a>

      <div className="absolute right-4 top-6 z-30 flex items-center gap-2.5 sm:right-8 sm:top-8 sm:gap-3">
        <a
          href="#invest"
          className="rounded-full bg-[#e8b93b] px-4 py-2 text-xs font-semibold text-neutral-900 shadow-lg transition-colors hover:bg-[#f0c65a] sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Invest / Donate
        </a>
        <a
          href="#crypto"
          className="rounded-full bg-[#e8b93b] px-4 py-2 text-xs font-semibold text-neutral-900 shadow-lg transition-colors hover:bg-[#f0c65a] sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Buy M.D Crypto
        </a>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-[42%] z-20 flex -translate-y-1/2 flex-col items-center px-4 text-center sm:top-[44%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h1 className="flex flex-col items-center uppercase">
          <span className="text-[clamp(2.75rem,10vw,6.75rem)] font-bold leading-[0.9] tracking-[0.14em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)] sm:tracking-[0.18em]">
            Gravity
          </span>
          <span
            className="mt-1 bg-gradient-to-r from-neutral-300 via-white to-neutral-400 bg-clip-text text-[clamp(2.75rem,10vw,6.75rem)] font-bold leading-[0.9] tracking-[0.32em] text-transparent drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)] sm:mt-2 sm:tracking-[0.42em]"
            style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.5))" }}
          >
            Motor
          </span>
        </h1>
        <div
          className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent sm:mt-6 sm:w-28"
          aria-hidden
        />
      </div>

      <Nav />
    </section>
  );
}
