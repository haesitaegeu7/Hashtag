// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white py-20">
      <div className="container mx-auto px-4 flex items-start justify-between">
        
        <div className="flex gap-x-20">
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">about</Link></li>
              <li><Link href="/people" className="hover:text-white">people</Link></li>
              <li><Link href="/contents" className="hover:text-white">contents</Link></li>
              <li><Link href="/participate" className="hover:text-white">participate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="flex items-center gap-x-2 hover:text-white">
                  <FaInstagram /> instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Brand consulting</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white">Q&A</Link></li>
            </ul>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image src="/logos/footerLogo.png" alt="Footer Logo" width={100} height={55} />
        </div>
        
      </div>
    </footer>
  );
}