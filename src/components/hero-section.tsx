export default function HeroSection() {
  return (
    <section className="bg-[#e6f4ff] py-16 md:py-24 lg:py-5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0d3b5c] !leading-tight text-center md:text-left mx-4 md:mx-0 ">
              Digital transformation
              in education is
              inevitable.
            </h1>
          </div>
          <div className="relative md:order-2 order-1">
            <img
              src="/hero-img.png"
              width={600}
              height={450}
              alt="Digital education illustration showing students interacting with technology"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
