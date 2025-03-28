import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { Spacer } from "@/components/ui/spacer"

function Roles() {
  // Placeholder image URL (replace seed for different images)

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-cyan-500 mb-2">Contact us</p>
        <h2 className="text-4xl font-bold mb-2">We'd love to hear from you</h2>
        <p className="text-gray-600">Our friendly team is always here to chat.</p>
      </div>

      {/* Contact Form Card */}
      <Card className="mb-16 overflow-hidden rounded-3xl shadow-sm bg-brand-100 border border-brand-400">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/6 bg-gray-900 overflow-hidden rounded-3xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/2244/8508/ff1d18b99f8382e3a18ad861de5e1da3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCMc4YUfbNpU7r-872dJ8hFuMjIqTChBrOIqBlM4SDJ3EX79Gwa7uaAczXleK6aNBLV~yHRXPJ3Mtz-UukBc22kXey02lQHylQg9116A1LKzYwXt-rql5~NxS40A0hn7cfW68c-~w1gX-M8inam35OpIcVB4KWtqXkKeU9w~n7gtGzUOG6P~-13fkd-IQOv8PDVUXruhVwbyEXw5MsiBv7IAQaKwngUwPJZQ9uvAcCVF~QGRotn1SRxPvRt0la7daKe16pJXXwFYa2Ve3~X3GlMgDnhmvuSfHZ71xpI7JRb-lmBIddJxJernFSwQObsF2bQlcc4sbDrS16lVwvLRpA__"
              alt="Customer support representative"
              className="w-full h-full object-cover"
            />
          </div>
          <Spacer x={40} />

          {/* Form Section */}
          <div className="w-full md:w-7/12 p-8 pr-0">
            <p className="text-sm font-medium text-cyan-500 mb-2">Contact us</p>
            <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
            <p className="text-gray-600 mb-6">We'd love to hear from you. Please fill out this form.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm mb-2">
                    First name
                  </label>
                  <Input id="first-name" placeholder="First name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm mb-2">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Last name" className="w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Phone number" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="email@email.com" className="w-full" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Leave us a message..." className="w-full min-h-[120px]" />
              </div>

              <Button className="bg-brand-500 hover:bg-brand-600 text-white">Send message</Button>
            </form>
          </div>
        </div>
      </Card>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border border-brand-400 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-full bg-brand-100 mb-4">
                <Mail className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-700 text-sm mb-2 font-normal">Our friendly team is here to help.</p>
              <a href="mailto:hi@loremipsum.com" className="text-brand-500 text-sm font-medium">
                hi@loremipsum.com
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-brand-400 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-full bg-brand-100 mb-4">
                <MapPin className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Office</h3>
              <p className="text-gray-700 text-sm mb-2 font-normal">Come say hello at our office HQ.</p>
              <span className="text-brand-500 text-sm font-medium">lorem ipsum dolor sit</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-brand-400 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-full bg-brand-100 mb-4">
                <Phone className="h-5 w-5 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-700 text-sm mb-2 font-normal">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+1(555)000-0000" className="text-brand-500 text-sm font-medium">
                +1 (555) 000-0000
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Roles

