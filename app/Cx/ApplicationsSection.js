import {
  TbBuildingSkyscraper,
  TbBuildingWarehouse,
  TbMap2,
} from "react-icons/tb";

const ICONS = [
  {
    key: "buildings",
    label: "Buildings",
    Icon: TbBuildingSkyscraper,
  },
  {
    key: "silos",
    label: "Silos",
    Icon: TbBuildingWarehouse,
  },
  {
    key: "land",
    label: "Land",
    Icon: TbMap2,
  },
];

export default function ApplicationsSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
          Increase in height and weight is more continuous powerful endless
          energy.
        </p>
        <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Underground or above ground anywhere in:
        </p>

        <ul className="mt-8 flex w-full max-w-xl flex-col items-stretch justify-center gap-8 sm:mt-10 sm:flex-row sm:gap-6 md:mt-10 md:gap-10">
          {ICONS.map(({ key, label, Icon }) => (
            <li
              key={key}
              className="flex flex-1 flex-col items-center gap-3 sm:min-w-0"
            >
              <Icon
                className="size-14 shrink-0 text-neutral-900 sm:size-16"
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="text-sm font-normal text-neutral-700 sm:text-base">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-700 sm:mt-10 sm:text-lg md:mt-10">
          Multiple sections can also be added to increase output.
        </p>
      </div>
    </section>
  );
}
