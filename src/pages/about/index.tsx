const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-8">
        Welcome to makt'app - your comprehensive solution for educational management.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to transform education through innovative technology solutions
            that connect students, teachers, and educational institutions.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            We envision a world where education is accessible, efficient, and effective for
            everyone, regardless of location or background.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About 