export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-4">PayGrid</h3>
            <p className="text-gray-500 text-sm">
              Self-hosted payments with privacy for businesses
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Qhristen/paygrid"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                    href="https://www.npmjs.com/package/@qhristen/paygrid"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                                  href="https://www.npmjs.com/package/@qhristen/paygrid"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} PayGrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
