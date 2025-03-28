const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        Have questions or feedback? Get in touch with our team.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Address</h3>
              <p>123 Education Street, Baku, Azerbaijan</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p>info@maktapp.com</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p>+994 12 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 