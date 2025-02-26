import Image from "next/image"
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About EduConsult</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are dedicated to helping students achieve their academic and career goals through quality education
                  and expert guidance.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About EduConsult"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 2010, EduConsult began with a simple mission: to provide quality educational guidance to
              students seeking to improve their language skills and pursue international education opportunities.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Over the years, we have grown from a small language center to a comprehensive educational consultancy,
              helping thousands of students achieve their academic and career goals. Our commitment to excellence and
              student success has made us a trusted name in the education sector.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower students with the knowledge, skills, and guidance they need to succeed in their educational
                and professional journeys.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Provide quality education and guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Help students achieve their academic goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Create opportunities for international education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Foster a supportive learning environment</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading educational consultancy, recognized globally for our commitment to excellence,
                innovation, and student success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Expand our reach to help more students worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Continuously improve our services and methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Build strong partnerships with educational institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>Maintain the highest standards of integrity and professionalism</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              What sets EduConsult apart from other educational consultancies
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Experienced Faculty</h3>
              <p className="text-muted-foreground">
                Our instructors are highly qualified professionals with years of experience in their respective fields.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personalized Approach</h3>
              <p className="text-muted-foreground">
                We understand that each student is unique, and we tailor our services to meet individual needs and
                goals.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Comprehensive Services</h3>
              <p className="text-muted-foreground">
                From language classes to study abroad consultancy, we offer a wide range of services under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Meet the dedicated professionals behind EduConsult</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Dr. Jane Smith", role: "Founder & Director" },
              { name: "Prof. John Doe", role: "Academic Coordinator" },
              { name: "Sarah Johnson", role: "IELTS Instructor" },
              { name: "Michael Brown", role: "Study Abroad Counselor" },
            ].map((member, i) => (
              <div key={i} className="rounded-lg bg-card p-6 text-center shadow">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=${member.name.split(" ")[0]}`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

