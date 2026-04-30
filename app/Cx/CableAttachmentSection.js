import Image from "next/image";

function CalloutLeft({ text, topPct, dotXPct, labelEdgePct = 16 }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <p className="absolute left-0 top-1/2 w-[46%] max-w-44 -translate-y-1/2 pr-1 text-right text-[8px] font-medium uppercase leading-snug tracking-wide text-neutral-950 sm:max-w-52 sm:text-[10px] md:text-xs">
        {text}
      </p>
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-800"
        style={{
          left: `${labelEdgePct}%`,
          width: `calc(${dotXPct}% - ${labelEdgePct}%)`,
        }}
        aria-hidden
      />
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 sm:size-2"
        style={{ left: `${dotXPct}%` }}
        aria-hidden
      />
    </div>
  );
}

function CalloutRight({ text, topPct, dotXPct, labelStartPct = 80 }) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-800"
        style={{
          left: `${dotXPct}%`,
          width: `calc(${labelStartPct}% - ${dotXPct}%)`,
        }}
        aria-hidden
      />
      <span
        className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 sm:size-2"
        style={{ left: `${dotXPct}%` }}
        aria-hidden
      />
      <p className="absolute right-0 top-1/2 w-[46%] max-w-44 -translate-y-1/2 pl-1 text-left text-[8px] font-medium uppercase leading-snug tracking-wide text-neutral-950 sm:max-w-52 sm:text-[10px] md:text-xs">
        {text}
      </p>
    </div>
  );
}

function InsetOverlay({ children }) {
  return (
    <div className="pointer-events-none absolute inset-2 z-10 sm:inset-3">
      {children}
    </div>
  );
}

const COL_MIN = "min-h-[20rem] md:min-h-[30rem] lg:min-h-[32rem]";

export default function CableAttachmentSection() {
  return (
    <section
      className="bg-white px-4 py-8 sm:px-6 md:px-8 md:py-12"
      data-aos="fade-left"
    >
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:items-stretch md:gap-2 lg:gap-3">
        {/* Large left — pulley (label left; dot ~46% top, ~18% from right → 82% from left) */}
        <div
          className={`relative w-full overflow-hidden rounded-3xl ${COL_MIN}`}
        >
          <Image
            src="/pulley.png"
            alt="Cable flatback weight attachment on pulley"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <InsetOverlay>
            <CalloutLeft
              text="Cable Flatback Weight Attachment"
              topPct={46}
              dotXPct={82}
              labelEdgePct={14}
            />
          </InsetOverlay>
        </div>

        {/* Right column — rod + door; combined height matches left via shared min-h + flex-1 */}
        <div
          className={`flex flex-col gap-1 sm:gap-1.5 ${COL_MIN}`}
        >
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/rod.png"
              alt="Top door and cable seals"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <InsetOverlay>
              <CalloutRight
                text="Top Door & Cable Seals"
                topPct={25}
                dotXPct={42}
                labelStartPct={82}
              />
            </InsetOverlay>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/door-1.png"
              alt="Bottom door and cable seals"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <InsetOverlay>
              <CalloutRight
                text="Bottom Door & Cable Seals"
                topPct={72}
                dotXPct={58}
                labelStartPct={82}
              />
            </InsetOverlay>
          </div>
        </div>
      </div>
    </section>
  );
}
