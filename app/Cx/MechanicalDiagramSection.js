import Image from "next/image";

/** Percent along full diagram width where the dot sits (left chamber ~38–43%, right ~57–62%). */
const LEFT_CALLOUTS = [
  { key: "top", text: "Top Air Sealed Doors", top: 24.5, dot: 38 },
  { key: "grav", text: "Gravity Air Chamber Down (Air Locked)", top: 34, dot: 48 },
  { key: "div", text: "Liquid - Air Divider", top: 44, dot: 38 },
  { key: "bottom", text: "Bottom Air Sealed Doors", top: 63, dot: 45 },
];

const RIGHT_CALLOUTS = [
  { key: "top", text: "Top Air Sealed Doors", top: 25, dot: 57 },
  { key: "div", text: "Liquid - Air Divider", top: 40, dot: 54 },
  { key: "buoy", text: "Liquid Buoyancy Chamber Up (Air Locked)", top: 52, dot: 63 },
  { key: "bottom", text: "Bottom Air Sealed Doors", top: 63.5, dot: 63 },
  { key: "gen", text: "Generator Output", top: 86, dot: 60 },
];

const LABEL_EDGE_LEFT = 20.5;
const LABEL_EDGE_RIGHT = 79.5;

function OverlayLeftCallout({ text, top, dot }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${top}%`, transform: "translateY(-50%)" }}
    >
      <p className="absolute left-0.5 top-1/2 w-[17%] min-w-0 -translate-y-1/2 pr-0.5 text-right text-[8px] font-normal uppercase leading-snug tracking-wide text-neutral-900 sm:left-2 sm:w-[16%] sm:pr-1 sm:text-[10px] md:text-xs">
        {text}
      </p>
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-700"
        style={{
          left: `${LABEL_EDGE_LEFT}%`,
          width: `calc(${dot}% - ${LABEL_EDGE_LEFT}%)`,
        }}
        aria-hidden
      />
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 sm:size-2"
        style={{ left: `${dot}%` }}
        aria-hidden
      />
    </div>
  );
}

function OverlayRightCallout({ text, top, dot }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${top}%`, transform: "translateY(-50%)" }}
    >
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-700"
        style={{
          left: `${dot}%`,
          width: `calc(${LABEL_EDGE_RIGHT}% - ${dot}%)`,
        }}
        aria-hidden
      />
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 sm:size-2"
        style={{ left: `${dot}%` }}
        aria-hidden
      />
      <p className="absolute right-0.5 top-1/2 w-[17%] min-w-0 -translate-y-1/2 pl-0.5 text-left text-[8px] font-normal uppercase leading-snug tracking-wide text-neutral-900 sm:right-2 sm:w-[16%] sm:pl-1 sm:text-[10px] md:text-xs">
        {text}
      </p>
    </div>
  );
}

export default function MechanicalDiagramSection() {
  return (
    <section
      id="mechanical-operation"
      className="scroll-mt-6 bg-white px-4 py-10 sm:px-6 md:px-8 md:py-12"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative mx-auto w-full max-w-4xl">
          <Image
            src="/gravity-motor-2.png"
            alt="Dual-section gravity motor with pulleys, liquid chambers, and generator bases"
            width={1400}
            height={900}
            className="relative z-0 h-auto w-full object-contain"
            sizes="(max-width: 1024px) min(100vw, 56rem), 896px"
          />

          <div className="pointer-events-none absolute inset-0 z-10">
            <p
              className="absolute top-[2.5%] z-20 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-wide text-neutral-950 sm:top-[3%] sm:text-xs md:text-sm"
              style={{ left: "36%" }}
            >
              Section 1
            </p>
            <p
              className="absolute top-[2.5%] z-20 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-wide text-neutral-950 sm:top-[3%] sm:text-xs md:text-sm"
              style={{ left: "64%" }}
            >
              Section 2
            </p>

            {LEFT_CALLOUTS.map(({ key, text, top, dot }) => (
              <OverlayLeftCallout key={key} text={text} top={top} dot={dot} />
            ))}
            {RIGHT_CALLOUTS.map(({ key, text, top, dot }) => (
              <OverlayRightCallout key={key} text={text} top={top} dot={dot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
