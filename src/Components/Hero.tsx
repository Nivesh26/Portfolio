import niveshImage from '../assets/Nivesh.png'

const Hero = () => {
  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden bg-[#F3F3F1]">
      {/* Soft atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(20,23,28,0.05),transparent_55%)]"
      />

      {/* Background name */}
      <p
        aria-hidden
        className="hero-name pointer-events-none absolute top-[14%] left-1/2 z-0 flex w-[96%] -translate-x-1/2 justify-center gap-[0.28em] text-center font-['Archivo_Black'] text-[clamp(2.6rem,9vw,7.25rem)] leading-none tracking-[-0.045em] text-[#14171C]/90 uppercase select-none"
      >
        <span>NIVESH</span>
        <span>SHRESTHA</span>
      </p>

      {/* Portrait */}
      <div className="hero-portrait absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <img
          src={niveshImage}
          alt="3D illustration of Nivesh Shrestha"
          className="h-[min(80vh,740px)] w-auto max-w-[min(90vw,540px)] object-contain object-bottom"
        />
      </div>

      {/* Side content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1240px] items-end justify-between px-5 pb-[18vh] sm:px-8 md:items-center md:px-12 md:pb-0 lg:px-16">
        <div className="hero-left flex max-w-[240px] flex-col items-start gap-4 sm:max-w-[300px] lg:max-w-[360px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FF2B2B] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(255,43,43,0.25)] font-[Manrope] sm:text-[13px]">
            <span className="size-1.5 rounded-full bg-white" />
            Available for Work
          </span>
          <h1 className="font-['Archivo_Black'] text-[2.15rem] leading-[1.04] tracking-[-0.025em] text-[#14171C] sm:text-[2.85rem] lg:text-[3.35rem] xl:text-[3.7rem]">
            UI/UX &amp;
            <br />
            Frontend
            <br />
            Developer
          </h1>
        </div>

        <div className="hero-right hidden max-w-[300px] md:block lg:max-w-[350px]">
          <p className="text-right font-[Manrope] text-[16px] leading-[1.7] font-medium text-[#14171C]/90 md:text-[17px] lg:text-[19px]">
            Hi, I&apos;m Nivesh Shrestha — a UI/UX and frontend developer
            passionate about creating seamless digital experiences that connect
            and convert.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
