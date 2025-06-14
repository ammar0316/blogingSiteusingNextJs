import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white mt-12">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Branding */}
    <div>
      <h2 className="text-xl font-bold mb-2">Blogify</h2>
      <p className="text-sm text-gray-400">
        Discover the latest tech trends, tutorials, and articles from passionate developers around the world.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white transition">Home</a></li>
        <li><a href="#" className="hover:text-white transition">Blogs</a></li>
        <li><a href="#" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Resources</h3>
      <ul className="space-y-1 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white transition">Docs</a></li>
        <li><a href="#" className="hover:text-white transition">Support</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
      <div className="flex gap-4 text-gray-400 text-xl">
        <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-white transition"><i className="fab fa-github"></i></a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Blogify. All rights reserved.
  </div>
</footer>

      
    </>
  )
}

export default Footer
