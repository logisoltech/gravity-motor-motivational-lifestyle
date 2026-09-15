import Image from "next/image";
import ContactButton from "./ContactButton";
import Nav from "./Nav";

const cta =
  "inline-flex items-center justify-center rounded-full bg-[#e8b93b] px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-neutral-900 shadow-lg transition-colors hover:bg-[#f0c65a] sm:px-5 sm:text-base";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden"
      data-aos="fade-in"
      data-aos-duration="900"
    >
      <div className="relative aspect-[3/2] w-full">
        <Image
          src="/heero.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <header className="absolute inset-x-0 top-0 z-30 px-4 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-7">
        {/* Single row on md+: logo | nav | buttons — no overlap */}
        <div className="hidden items-center gap-4 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-5 lg:gap-6">
          <a
            href="https://motivational-lifestyle.vercel.app/"
            className="shrink-0"
            aria-label="Motivational Lifestyle"
          >
            <Image
              src="/logo.png"
              alt="Institutional Lifestyle"
              width={400}
              height={130}
              className="h-20 w-auto lg:h-24 xl:h-28"
              priority
            />
          </a>

          <div className="flex min-w-0 justify-center">
            <Nav />
          </div>

          <div className="flex shrink-0 items-center gap-2.5 lg:gap-3">
            <a href="#invest" className={cta}>
              Invest / Donate
            </a>
            <a href="#crypto" className={cta}>
              Buy M.D Crypto
            </a>
            <ContactButton />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3">
            <a
              href="https://motivational-lifestyle.vercel.app/"
              className="shrink-0"
              aria-label="Motivational Lifestyle"
            >
              <Image
                src="/logo.png"
                alt="Institutional Lifestyle"
                width={400}
                height={130}
                className="h-16 w-auto sm:h-20"
                priority
              />
            </a>
            <ContactButton />
          </div>
          <div className="mt-3 flex justify-center">
            <Nav />
          </div>
          <div className="mt-3 flex justify-center gap-2">
            <a href="#invest" className={cta}>
              Invest / Donate
            </a>
            <a href="#crypto" className={cta}>
              Buy M.D Crypto
            </a>
          </div>
        </div>
      </header>

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
    </section>
  );
}
