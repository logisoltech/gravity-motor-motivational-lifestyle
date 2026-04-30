import Image from "next/image";

export default function GravityMotorSection() {
  return (
    <section
      id="about"
      className="scroll-mt-6 bg-white px-4 py-10 sm:px-6 md:px-8 md:py-12"
      data-aos="fade-up"
    >
      <div className="mx-auto grid max-w-screen-2xl items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Crop intrinsic side padding in the PNG via cover + portrait box */}
        <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden sm:max-w-lg md:mx-0 md:aspect-7/10 md:max-h-[min(85vh,40rem)] md:max-w-none">
          <Image
            src="/gravity-motor.png"
            alt="Gravity Motor device with liquid pistons and belt-and-pulley assembly"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) min(100vw, 28rem), (max-width: 1280px) 45vw, 560px"
          />
        </div>
        <div className="flex flex-col text-left">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            <span className="block">Gravity Motor</span>
            <span className="mt-1 block">Liquid Pistons</span>
          </h2>
          <div className="mt-6 space-y-1 text-base font-normal text-neutral-900">
            <p>Free Energy</p>
            <p>Patent No: 8756932</p>
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-800 sm:text-lg">
            Continuous production of electrical energy where in one section
            weight drops with gravity while in other section weights rise slowly
            with liquid buoyancy without any energy input or emissions.
          </p>
        </div>
      </div>
    </section>
  );
}
