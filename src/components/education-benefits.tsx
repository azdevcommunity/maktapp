export default function EducationBenefits() {
  return (
    <section className="w-full py-12 md:py-24 flex items-center justify-center px-4 sm:px-6 md:px-10">
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Benefits of digital transformation in education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
          {/* Card 1 */}
          <div className="bg-[#C8CFFF] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/improving_edu.svg" alt="Improving the quality of education" className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Improving the quality of education</h3>
            <p className="text-gray-700">
              Digital transformation creates a more interactive, engaging and effective learning environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFC8FF] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/pers_learn.svg" alt="Personalized Learning" className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
            <p className="text-gray-700">
              An LMS facilitates the customization of learning paths, instructions, and assignments, addressing student
              needs, pace, and interests.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E6FFC8] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/share_resource.svg" alt="Share resources" className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Share resources</h3>
            <p className="text-gray-700">
              LMS allows educators to design and share resources and critical content while simultaneously considering
              participation and performance
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#C8FFE6] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/expand_edu.svg" alt="Expanding access to education" className="h-10 w-10 text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expanding access to education</h3>
            <p className="text-gray-700">
              Digital transformation allows students to access knowledge anytime, anywhere through online learning
              platforms.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#FFE4C8] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/organisation.svg" alt="Organisation" className="h-10 w-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Organisation</h3>
            <p className="text-gray-700">
              An LMS allows for the centralisation of all educational materials, making it easy for learners to find
              what they need when they need it.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#D5EEFF] rounded-3xl p-8 flex flex-col items-center text-center max-w-md">
            <div className="bg-white p-3 rounded-lg mb-4 inline-flex items-center justify-center">
              <img src="/productivity_benefits.svg" alt="Productivity" className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Productivity</h3>
            <p className="text-gray-700">
              an LMS saves student and teacher time by assembling all e-learning materials, tools and communications in
              one place
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

