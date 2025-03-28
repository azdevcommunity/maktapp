export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="flex items-center space-x-8 mb-4 md:mb-0">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Əsas səhifə
          </a>
          <a href="/rollar" className="text-gray-700 hover:text-gray-900">
            Rollar
          </a>
          <a href="/elaqe" className="text-gray-700 hover:text-gray-900">
            Əlaqə
          </a>
        </nav>
        <div className="text-gray-700">© 2025 All rights reserved.</div>
      </div>
    </footer>
  )
}

