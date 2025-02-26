import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">EduConsult</h3>
            <p className="mb-4 text-sm">
              Providing quality educational consultancy services to help
              students achieve their academic goals and career aspirations.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:underline">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="hover:underline">
                  Enquiry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/language-classes"
                  className="hover:underline"
                >
                  Language Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/preparation-classes"
                  className="hover:underline"
                >
                  Preparation Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/preparation-classes/ielts"
                  className="hover:underline"
                >
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/preparation-classes/toefl"
                  className="hover:underline"
                >
                  TOEFL Preparation
                </Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:underline">
                  Study Abroad Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 shrink-0" />
                <span>Lagankhel, Lalitpur ( near buspark)</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 shrink-0" />
                <span>01-5425715 | 01-5455699 | 01-5911369</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 shrink-0" />
                <span>
                  gloriousacademy13@gmail.com / gloriousnepaledu@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} EduConsult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
