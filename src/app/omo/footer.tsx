import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="/logos/cohi-logo.png" alt="COHI Logo" width={150} height={50} />
            <p className="mt-4 text-gray-300">
              Council of Higher Institutions (COHI) MSSN Lagos is dedicated to fostering Islamic values, academic
              excellence, and community service among Muslim students in Lagos State's higher institutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#institutions" className="hover:text-green-400">
                  Member Institutions
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-green-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-green-400">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@cohimssn.org</li>
              <li>Phone: +234 123 456 7890</li>
              <li>Address: COHI Secretariat, Lagos State, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2023 Council of Higher Institutions (COHI) MSSN Lagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

