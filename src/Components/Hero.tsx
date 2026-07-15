import niveshImage from '../assets/Nivesh.png'

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16">
      <h1 className="font-[Syne] text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
        NIVESH SHRESTHA
      </h1>
      <img
        src={niveshImage}
        alt="3D illustration of Nivesh with glasses, resting his chin on his hand"
        className="-mt-2 max-h-[min(70vh,520px)] w-auto object-contain"
      />
    </section>
  )
}

export default Hero
