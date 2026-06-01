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

      {/* Top vignette so logo & pill nav stay readable */}
      <div
        className="pointer-events-none absolute inset-0 z-10 min-h-screen bg-gradient-to-b from-black/50 via-black/10 to-transparent"
        aria-hidden
      />

      <a
        href="/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
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

      <Nav />
    </section>
  );
}
