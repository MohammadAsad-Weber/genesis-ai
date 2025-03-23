function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-10 text-center text-sm text-[#888888] bg-[#0c1423] border-t-2 border-gray-600 sm:text-base md:text-lg">
      &copy; {year} Genesis - AI, All Rights Reserved.
    </footer>
  );
}

export default Footer;
