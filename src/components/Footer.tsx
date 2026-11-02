'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/logo.webp"
                alt="Logo"
                width={90}
                height={72}
                className="w-18 h-17 object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Expert travel solutions and services provided with care and professionalism. Your trusted partner for all travel needs.
            </p>
            <div className="flex items-center space-x-4">
              {[
                 { icon: Facebook, href: '#facebook' },
                 { icon: Twitter, href: '#twitter' },
                 { icon: Instagram, href: '#instagram' },
                 { icon: Youtube, href: '#youtube' },
                 { icon: FaWhatsapp, href: 'https://wa.me/94763862035?text=' + encodeURIComponent('Hello ATCCA, I would like to inquire about your travel services.'), external: true },
                 { icon: FaTripadvisor, href: '#tripadvisor' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  {...(social.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="text-[#1EAEDB] hover:text-[#33C3F0] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Destinations', path: '/destinations' },
                { name: 'Vehicles', path: '/vehicles' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-base"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Our Values</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', path: '/about' },
                { name: 'Contact us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-base"
                    onClick={() => {
                      if (item.path.includes('#')) {
                        setTimeout(() => {
                          document.getElementById('leadership-team')?.scrollIntoView({ 
                            behavior: 'smooth' 
                          });
                        }, 100);
                      }
                    }}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: 'FAQ', path: '/faq' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-base"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#1EAEDB] mt-1" />
                <p className="text-gray-400 text-base">
                  No. 230A, Palagathura,<br />
                  Negombo.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#1EAEDB]" />
                <div className="space-y-1">
                  <a href="mailto:atccqpik@gmail.com" className="block text-gray-400 hover:text-white transition-colors text-base">
                    atccqpik@gmail.com
                  </a>
                  <a href="mailto:info@atccalk.com" className="block text-gray-400 hover:text-white transition-colors text-base">
                    info@atccalk.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#1EAEDB]" />
                <div className="space-y-1">
                  <a href="tel:+94773619000" className="block text-gray-400 hover:text-white transition-colors text-base">+94 77 361 9000</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-[#1EAEDB]">ATCCA</span>. Design & Develop by{' '}
            <span className="text-[#1EAEDB]"> Tech Eagle Hub</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
