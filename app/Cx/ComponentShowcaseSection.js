import Image from "next/image";

function CalloutLeft({ text, topPct, dotXPct, labelXPct = -50 }) {
  const lineStartPct = labelXPct + 38;

  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-20"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <p
        className="absolute top-1/2 w-[38%] -translate-y-1/2 text-right text-xs font-bold uppercase leading-tight text-black sm:text-sm"
        style={{ left: `${labelXPct}%` }}
      >
        {text}
      </p>

      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-black"
        style={{
          left: `${lineStartPct}%`,
          width: `calc(${dotXPct}% - ${lineStartPct}%)`,
        }}
      />

      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        style={{ left: `${dotXPct}%` }}
      />
    </div>
  );
}

function CalloutRight({ text, topPct, dotXPct, labelXPct = 118 }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-20"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        style={{ left: `${dotXPct}%` }}
      />

      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-black"
        style={{
          left: `${dotXPct}%`,
          width: `calc(${labelXPct}% - ${dotXPct}%)`,
        }}
      />

      <p
        className="absolute top-1/2 w-[30%] -translate-y-1/2 text-left text-xs font-bold uppercase leading-tight text-black sm:text-sm"
        style={{ left: `${labelXPct}%` }}
      >
        {text}
      </p>
    </div>
  );
}

const PANELS = [
  {
    src: "/gearbox-1.png",
    alt: "Gear shafts and gear boxes engage-disengage mechanism",
    width: 1920,
    height: 1080,
    side: "left",
    callouts: [
      { text: "Gear Shafts", topPct: 38, dotXPct: 30 },
      { text: "Gear Boxes Engage - Disengage", topPct: 85, dotXPct: 30 },
    ],
  },
  {
    src: "/wheels-1.png",
    alt: "Pulley wheels and cable design",
    width: 1920,
    height: 1080,
    side: "right",
    callouts: [
      { text: "Wheels", topPct: 30, dotXPct: 55 },
      { text: "Cable Design", topPct: 65, dotXPct: 56 },
    ],
  },
  {
    src: "/weights-2.png",
    alt: "Arc-mounted weights on pulley wheel",
    width: 1920,
    height: 1080,
    side: "left",
    callouts: [{ text: "Weights", topPct: 27, dotXPct: 30 }],
  },
  {
    src: "/weights-3.png",
    alt: "Stacked vertical weights",
    width: 1920,
    height: 1080,
    side: "right",
    callouts: [{ text: "Weights", topPct: 47, dotXPct: 52 }],
  },
];

export default function ComponentShowcaseSection() {
  return (
    <section
      className="bg-white px-4 py-8 sm:px-6 md:px-8 md:py-12"
      data-aos="fade-right"
    >
      <div className="mx-auto grid w-full max-w-[720px] grid-cols-2 gap-2">
        {PANELS.map(({ src, alt, width, height, side, callouts }) => (
          <div
            key={src}
            className="relative aspect-square overflow-visible rounded-2xl"
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-full w-full rounded-2xl object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />

            {callouts.map((callout) =>
              side === "left" ? (
                <CalloutLeft key={callout.text} {...callout} />
              ) : (
                <CalloutRight key={callout.text} {...callout} />
              ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
