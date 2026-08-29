const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 z-50 flex items-center justify-center px-5 py-5 sm:px-8 md:py-6">
      <nav className="flex items-center gap-5 font-[Manrope] text-[13px] font-medium text-[#14171C] sm:gap-7 sm:text-sm">
        <a href="#about" className="transition-opacity hover:opacity-55">
          About
        </a>
        <a href="#work" className="transition-opacity hover:opacity-55">
          Work
        </a>
        <a href="#contact" className="transition-opacity hover:opacity-55">
          Contact
        </a>
        <a
          href="/Nivesh_Shrestha_Resume.pdf"
          download="Nivesh_Shrestha_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#14171C] px-4 py-2 text-white transition-transform hover:scale-[1.03]"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Header
