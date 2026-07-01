import niveshImage from '../assets/Nivesh.png'

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <img
        src={niveshImage}
        alt="3D Nivesh Image 3D Illustration"
        className="max-h-[min(70vh,520px)] w-auto object-contain"
      />
    </section>
  )
}

export default Hero