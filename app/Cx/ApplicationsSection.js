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
    <section
      className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14"
      data-aos="zoom-in"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl md:text-2xl">
          Increase in height and weight is more continuous powerful endless
          energy.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 sm:mt-5 sm:text-xl md:text-2xl">
          Underground or above ground anywhere in:
        </p>

        <ul className="mt-10 flex w-full max-w-2xl flex-col items-stretch justify-center gap-10 sm:mt-12 sm:flex-row sm:gap-8 md:mt-14 md:gap-12">
          {ICONS.map(({ key, label, Icon }) => (
            <li
              key={key}
              className="flex flex-1 flex-col items-center gap-4 sm:min-w-0 sm:gap-5"
            >
              <Icon
                className="size-20 shrink-0 text-neutral-900 sm:size-24 md:size-28"
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="text-lg font-normal text-neutral-700 sm:text-xl md:text-2xl">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-700 sm:mt-12 sm:text-xl md:mt-14 md:text-2xl">
          Multiple sections can also be added to increase output.
        </p>
      </div>
    </section>
  );
}
