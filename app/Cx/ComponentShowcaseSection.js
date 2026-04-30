import Image from "next/image";

/**
 * Callout row; `dotXPct` / `topPct` are relative to the inset overlay
 * (matches image padding so dots align with object-contain content).
 */
function CalloutLeft({
  text,
  topPct,
  dotXPct,
  labelEdgePct = 18,
}) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <p className="absolute left-0 top-1/2 w-[42%] max-w-38 -translate-y-1/2 pr-1 text-right text-[8px] font-bold uppercase leading-snug tracking-wide text-neutral-950 sm:text-[10px] md:text-[11px]">
        {text}
      </p>
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-900"
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

function CalloutRight({
  text,
  topPct,
  dotXPct,
  labelStartPct = 80,
}) {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-10"
      style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
    >
      <div
        className="absolute top-1/2 h-0 -translate-y-1/2 border-b border-dotted border-neutral-900"
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
      <p className="absolute right-0 top-1/2 w-[42%] max-w-38 -translate-y-1/2 pl-1 text-left text-[8px] font-bold uppercase leading-snug tracking-wide text-neutral-950 sm:text-[10px] md:text-[11px]">
        {text}
      </p>
    </div>
  );
}

function InsetCallouts({ children }) {
  return (
    <div className="pointer-events-none absolute inset-2 z-10 sm:inset-3">{children}</div>
  );
}

function Tile({ children, className = "" }) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function ComponentShowcaseSection() {
  return (
    <section
      id="spreadsheet"
      className="scroll-mt-6 bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12"
      data-aos="fade-right"
    >
      <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2 sm:max-w-2xl sm:gap-2.5 md:max-w-3xl md:gap-3">
        <Tile>
          <Image
            src="/gearbox-1.png"
            alt="Gear shafts and gearbox engagement assembly"
            fill
            className="object-contain bg-neutral-50 p-2 sm:p-3"
            sizes="(max-width: 768px) 44vw, 360px"
          />
          <InsetCallouts>
            <CalloutLeft
              text="Gear Shafts"
              topPct={19}
              dotXPct={50}
              labelEdgePct={16}
            />
            <CalloutLeft
              text="Gear Boxes Engage - Disengage"
              topPct={69}
              dotXPct={50}
              labelEdgePct={16}
            />
          </InsetCallouts>
        </Tile>

        <Tile>
          <Image
            src="/wheels-1.png"
            alt="Pulley wheels and cable design"
            fill
            className="object-contain bg-neutral-50 p-2 sm:p-3"
            sizes="(max-width: 768px) 44vw, 360px"
          />
          <InsetCallouts>
            <CalloutRight
              text="Wheels"
              topPct={20}
              dotXPct={51}
              labelStartPct={81}
            />
            <CalloutRight
              text="Cable Design"
              topPct={60}
              dotXPct={50}
              labelStartPct={81}
            />
          </InsetCallouts>
        </Tile>

        <div className="col-span-2 flex gap-0 overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200/60">
          <div className="relative aspect-2/1 min-h-0 min-w-0 flex-1 sm:aspect-auto sm:h-48 md:h-52">
            <Image
              src="/weights-2.png"
              alt="Radial weights on pulley"
              fill
              className="object-contain p-2 sm:p-3"
              sizes="(max-width: 768px) 50vw, 400px"
            />
            <InsetCallouts>
              <CalloutLeft
                text="Weights"
                topPct={30}
                dotXPct={40}
                labelEdgePct={14}
              />
            </InsetCallouts>
          </div>
          <div className="relative aspect-2/1 min-h-0 min-w-0 flex-1 sm:aspect-auto sm:h-48 md:h-52">
            <Image
              src="/weights-3.png"
              alt="Stacked weights on vertical rods"
              fill
              className="object-contain p-2 sm:p-3"
              sizes="(max-width: 768px) 50vw, 400px"
            />
            <InsetCallouts>
              <CalloutRight
                text="Weights"
                topPct={47}
                dotXPct={53}
                labelStartPct={84}
              />
            </InsetCallouts>
          </div>
        </div>
      </div>
    </section>
  );
}
