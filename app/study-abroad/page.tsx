import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const countries = [
  {
    name: "Australia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gloriousnepaledu.com_australia_-2c5OTHcEQQFZ8uykaJ9tNP25nCiTo6.png",
    description: "World-class education in a multicultural environment",
    link: "/study-abroad/australia",
  },
  {
    name: "USA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa-study-abroad-D35HkFWZqI8V3gF7q9YywTFaFmI9lb.jpg",
    description: "Leading universities and diverse opportunities",
    link: "/study-abroad/usa",
  },
  {
    name: "UK",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uk-study-abroad-kRcPwp0keGGgobFEHFsyETQQDwRMhw.jpg",
    description: "Traditional excellence in education",
    link: "/study-abroad/uk",
  },
  {
    name: "Canada",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canada-study-abroad-HlbM3qXu4KrsGcrCOwBts8I3FRLSx0.jpg",
    description: "Quality education with great career prospects",
    link: "/study-abroad/canada",
  },
];

export const dynamicParams = false;
export const revalidate = 3600; // Revalidate every hour

export default function StudyAbroadPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gloriousnepaledu.com_.png-MHYBIC0cdRPkkPG8Rk3FTUML77nDCS.jpeg')] bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Study Abroad</h1>
            <p className="text-lg">
              Your gateway to international education opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.link}
                className="group block"
              >
                <div className="relative aspect-[4/3] mb-4">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary">
                  {country.name}
                </h3>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <span className="text-primary inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Study Abroad?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Global Recognition</h3>
              <p className="text-gray-600">
                Earn internationally recognized degrees from prestigious
                institutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
              <p className="text-gray-600">
                Access to global job markets and better career prospects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cultural Experience</h3>
              <p className="text-gray-600">
                Immerse yourself in new cultures and expand your worldview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Application Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>University selection guidance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Application document preparation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personal statement review</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Visa Assistance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Visa application guidance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Document verification</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interview preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
