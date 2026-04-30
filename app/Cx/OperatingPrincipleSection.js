const h2 =
  "text-center text-2xl font-bold uppercase leading-tight tracking-wide text-neutral-950 sm:text-3xl md:text-4xl lg:text-5xl";

const h3 =
  "text-center text-lg font-bold uppercase leading-snug tracking-wide text-neutral-950 sm:text-xl md:text-2xl lg:text-3xl";

const slogan =
  "text-center text-base font-bold uppercase leading-snug tracking-wide text-neutral-950 sm:text-lg md:text-xl";

const body =
  "text-center text-base font-normal leading-relaxed tracking-wide text-neutral-700 sm:text-lg md:text-xl";

const bullets = [
  "No fuel - Chemicals - Combustion - Emission - Pollution",
  "No Sun, Wind, Water necessary",
  "Build Anywhere",
  "3 States of Matter, Solid, Liquid, Gas Combined with two Forces - Gravity and Buoyancy to generate as much free power as necessary",
  "No dams or reservoirs which need constant replenishment of water and satisfactory supportive climate conditions.",
];

export default function OperatingPrincipleSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full rounded-3xl border-2 border-dashed border-neutral-400 px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">
          <h2 className={h2}>Background</h2>

          <p className={`${body} mt-8 text-pretty md:mt-10`}>
            In the past 100 years it has been the mission of industries, governments
            and humanity to generate as much energy and power as necessary to run
            engines and machines to develop civilization to the level we have
            achieved so far but also to find methods to reduce emissions and waste
            from burning the toxic chemicals and fuels needed to generate that
            needed power.
          </p>

          <h3 className={`${h3} mt-10 text-pretty md:mt-14`}>
            Summary of operating principle &amp; field
          </h3>

          <p className={`${slogan} mt-8 md:mt-10`}>Gravity + Buoyancy = Free Energy</p>
          <p className={`${slogan} mt-3`}>FEEE - Free Endless Energy Everywhere</p>

          <p className={`${body} mt-10 text-pretty md:mt-12`}>
            In a 2 chamber design, weights or masses circulate like pistons using
            gravity to drop down in one chamber and buoyancy of liquids in an air
            locked vacuum 2nd chamber to rise up by means of 2 doors opening and
            closing to maintain one liquid level without replacement for buoyancy
            turning a generator shaft to create a motor producing as much electrical
            power as needed for free.
          </p>

          <p className={`${body} mt-6 text-pretty md:mt-8`}>
            Many sections each with 2 chambers will be used to create an
            alternating energy process where one section will generate power with
            gravity in the gravity chamber from a dropping weight while in an
            attached section a weight rises up from the buoyancy of a liquid in the
            liquid chamber without any energy input and any disruption of power.
            Both chambers of each section are connected together with a cable to a
            mechanism consisting of a 2 wheel/pulley/gear at the top and bottom
            whereby the circulation of the cable with the attached weight turns
            these wheels that are connected to a generator shaft revolving up and
            down similar to a motor piston. Mechanical energy converted to
            electrical energy.
          </p>

          <ul className="mx-auto mt-10 max-w-5xl space-y-4 text-left text-base leading-relaxed tracking-wide text-neutral-700 sm:mt-12 sm:text-lg md:mt-14 md:text-xl">
            {bullets.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-1 shrink-0 text-neutral-950" aria-hidden>
                  •
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-6xl text-center text-sm font-bold uppercase leading-snug tracking-wide text-neutral-950 sm:mt-12 sm:text-base md:mt-14 md:text-lg lg:text-xl">
          Mass × Gravity × Height = Energy = Alternator Output (RPM - Poles -
          Gear Ratio - Height)
        </p>
      </div>
    </section>
  );
}
