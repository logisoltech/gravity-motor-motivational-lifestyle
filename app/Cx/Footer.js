export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#505050] py-2.5 sm:py-3"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <p className="text-center text-xs text-white sm:text-sm">
        M.D. 111 @ {year}. All rights reserved.
      </p>
    </footer>
  );
}
