import { FeatureCard } from "./feature-card"
import FeatureCardWImage from "./feature-card-w-image"
import { Spacer } from "./ui/spacer"

export default function FeaturesSection() {
  const descriptions = [
    "Digital transformation in education is the process of applying digital technologies in teaching, learning and educational management.",
    "This includes improving teaching methods, upgrading learning support tools, and improving the quality of student learning",
  ]
  return (
    <section className="px-4 sm:px-6 md:px-10 py-8 md:py-12 relative overflow-hidden">
      <Spacer y={100} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {/* Large card on the left */}
        <div className="lg:col-span-2">
          <FeatureCard
            title="Digital transformation in education LMS"
            description={descriptions}
            className="h-full min-h-[300px]"
          />
        </div>

        {/* Column of 4 cards - right side */}
        <div className="lg:col-span-3 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top two cards - fully visible */}
            <FeatureCardWImage
              title="Digital transformation"
              className="h-full min-h-[220px] lg:min-h-[180px]"
              imageSrc="/digital_trans.svg"
              imageAlt="Digital transformation concept with computer and education icons"
            />
            <FeatureCardWImage
              title="Craft Unique Learning Pathways"
              className="h-full min-h-[220px] lg:min-h-[180px]"
              imageSrc="/pathways.svg"
              imageAlt="Learning pathways concept with education materials"
            />

            {/* Bottom two cards - only titles visible on desktop */}
            <div className="md:col-span-1 mt-4 lg:mt-0">
              <div className="lg:h-[140px] overflow-hidden rounded-t-3xl bg-white lg:rounded-b-none rounded-b-3xl">
                <div className="p-8 pt-6 pb-0">
                  <h2 className="text-[28px] font-medium text-gray-800">Progress Tracking</h2>
                </div>
                <div className="lg:hidden p-8 pt-4">
                  <div className="relative flex-grow flex items-center justify-center">
                    <img
                      src="/progress.svg"
                      alt="Progress tracking concept with charts and metrics"
                      width={320}
                      height={227}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 mt-4 lg:mt-0">
              <div className="lg:h-[140px] overflow-hidden rounded-t-3xl bg-white lg:rounded-b-none rounded-b-3xl">
                <div className="p-8 pt-6 pb-0">
                  <h2 className="text-[28px] font-medium text-gray-800">
                    <span className="lg:block">Enhanced</span> <span className="lg:block">Productivity</span>
                  </h2>
                </div>
                <div className="lg:hidden p-8 pt-4">
                  <div className="relative flex-grow flex items-center justify-center">
                    <img
                      src="/productivity.svg"
                      alt="Productivity enhancement concept with time management elements"
                      width={320}
                      height={227}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={50} />
    </section>
  )
}

