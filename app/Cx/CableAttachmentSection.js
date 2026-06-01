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

export default function CableAttachmentSection() {
  // pulley 300×488, rod & door-1 258×236 — right panels are true squares
  const sectionHeight = 480;
  const gap = 8;
  const squareSize = (sectionHeight - gap) / 2;
  const leftWidth = Math.round(sectionHeight * (300 / 488));

  return (
    <section
      className="bg-white px-4 py-8 sm:px-6 md:px-8 md:py-12"
      data-aos="fade-left"
    >
      <div className="mx-auto flex w-fit max-w-full gap-2">
        {/* LEFT TALL — pulley.png */}
        <div
          className="relative shrink-0 overflow-visible rounded-2xl"
          style={{ width: leftWidth, height: sectionHeight }}
        >
          <Image
            src="/pulley.png"
            alt="Cable flatback weight attachment on pulley"
            fill
            className="rounded-2xl object-cover object-center"
            sizes={`${leftWidth}px`}
          />

          <CalloutLeft
            text="Cable Flatback Weight Attachment"
            topPct={44}
            dotXPct={54}
          />
        </div>

        {/* RIGHT COLUMN — square rod.png & door-1.png panels */}
        <div
          className="flex shrink-0 flex-col gap-2"
          style={{ width: squareSize, height: sectionHeight }}
        >
          <div
            className="relative overflow-visible rounded-2xl"
            style={{ width: squareSize, height: squareSize }}
          >
            <Image
              src="/rod.png"
              alt="Top door and cable seals"
              fill
              className="rounded-2xl object-cover object-center"
              sizes={`${squareSize}px`}
            />

            <CalloutRight
              text="Top Door & Cable Seals"
              topPct={25}
              dotXPct={30}
            />
          </div>

          <div
            className="relative overflow-visible rounded-2xl"
            style={{ width: squareSize, height: squareSize }}
          >
            <Image
              src="/door-1.png"
              alt="Bottom door and cable seals"
              fill
              className="rounded-2xl object-cover object-center"
              sizes={`${squareSize}px`}
            />

            <CalloutRight
              text="Bottom Door & Cable Seals"
              topPct={68}
              dotXPct={52}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
