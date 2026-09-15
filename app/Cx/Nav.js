const LINKS = [
  { label: "About", href: "#about" },
  { label: "Spreadsheet", href: "#spreadsheet" },
  { label: "Patent", href: "#patent" },
  { label: "Mechanical Operation", href: "#mechanical-operation" },
];

export default function Nav() {
  return (
    <nav
      className="rounded-full border border-white/10 bg-black/40 px-4 py-2.5 shadow-lg backdrop-blur-md sm:px-6 sm:py-3"
      aria-label="Primary"
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-x-8">
        {LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="relative inline-block cursor-pointer text-sm font-normal tracking-wide text-white/95 whitespace-nowrap transition-colors hover:text-white after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
