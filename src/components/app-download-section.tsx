import { useMediaQuery } from "@/hooks/use-media-query"

export default function AppDownloadSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="w-full py-12 md:py-24 flex items-center justify-center px-4 sm:px-6 md:px-10 bg-white">
      <div className="container  max-w-screen-xl mx-auto ">
        {/* Card container with rounded corners */}
        <div className="overflow-hidden rounded-[2rem] bg-[#e6f4ff] relative">
          {isMobile ? (
            // Mobile layout
            <div className="px-6 py-7 flex flex-col items-center text-center">
              {/* Phone mockup */}
              <div className="relative mb-8 h-[400px] w-[314px]">
                <img src="/mobile_phone_mockup.png" alt="Mobile app mockup" className="w-full h-full object-contain" />
              </div>

              {/* Text content */}
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">Change the way you learn</h2>
              <p className="mb-8 text-sm font-light text-gray-700">Download Maktapp LMS from the App Store & Google Play</p>

              {/* App store buttons */}
              <div className="flex flex-row justify-center gap-4">
                <a href="#" className="inline-block">
                  <img
                    src="/app_store_badge.svg"
                    alt="Download on the App Store"
                    className="w-[145.5px] h-[44px]"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="/google_play_store.svg"
                    alt="Get it on Google Play"
                    className="w-[145.5px] h-[44px]"
                  />
                </a>
              </div>
            </div>
          ) : (
            // Desktop layout - using grid for better alignment
            <div className="grid grid-cols-2 min-h-[500px] md:min-h-[550px] lg:min-h-[400px]">
              {/* Text content - centered in left column */}
              <div className="flex items-center justify-center p-12">
                <div className="max-w-xl">
                  <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                    Change the way you learn
                  </h2>
                  <p className="mb-8 text-xl text-gray-700">Download Maktapp LMS from the App Store & Google Play</p>

                  {/* App store buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="inline-block">
                      <img
                        src="/app_store_badge.svg"
                        alt="Download on the App Store"
                        width={176}
                        height={53}
                        className="h-auto w-[135px] md:w-[176px]"
                      />
                    </a>
                    <a href="#" className="inline-block">
                      <img
                        src="/google_play_store.svg"
                        alt="Get it on Google Play"
                        width={176}
                        height={53}
                        className="h-auto w-[135px] md:w-[176px]"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone mockup column */}
              <div className="relative flex items-end justify-center">
                {/* Background blob - centered behind phone */}
                <div className="absolute bottom-0 -z-0 h-[450px] w-[450px] translate-x-[-5%]">
                  <img
                    src="/background-blob.png"
                    alt=""
                    className="w-full h-full object-contain object-bottom"
                    aria-hidden="true"
                  />
                </div>

                {/* Phone mockup */}
                <div className="relative z-10 h-[350px] w-[250px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[350px]">
                  <img
                    src="/phone_mockup.png"
                    alt="Mobile app mockup"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

