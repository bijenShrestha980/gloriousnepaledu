import Image from "next/image"
import { Check } from "lucide-react"

export default function LanguageClassesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gloriousnepaledu.com_language-classes_-grUWV5EHXhWPwU26DCZ3liSvBsuaRf.png')] bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex items-center justify-center space-x-2 text-sm mb-4">
              <a href="/" className="hover:underline">
                HOME
              </a>
              <span>›</span>
              <span>LANGUAGE CLASSES</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LANGUAGE CLASSES</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course List */}
            <div className="md:col-span-2 space-y-8">
              {/* Korean Language */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Korean Language</h2>
                <div className="space-y-2">
                  <h3 className="font-semibold">EPS TOPIK, PBT/CBT</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Normal / Special Course for the work permit job in South Korea</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Skill Test Class with Korean language for EPS TOPIK Students</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Basic Level Korean Language Class to Advance level Korean Language class for Students</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Skill Test Lab and Library are also available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Japanese Language */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Japanese Language</h2>
                <div className="space-y-2">
                  <p>N5, N4, N3, N2, JLPT, NAT Test /J.sort/Top J Exam preparation class</p>
                </div>
              </div>

              {/* English Language */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">English Language</h2>
                <div className="space-y-2">
                  <p>Fluency, Speaking, Writing, Reading and listening for practical and professional language</p>
                </div>
              </div>

              {/* Other Languages */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Other Language Courses</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Chinese language- 3 Months Package course, Special class and normal class</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>German language-A1, A2, B1, B2 class special class</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Hebrew language-Special class and normal class</span>
                  </li>
                </ul>
              </div>

              {/* Additional Courses */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Additional Programs</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Share Training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Auditing/Accountancy Training (theoretical and practical ways)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Personality development training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Computer Education</span>
                  </li>
                </ul>

                <div className="pl-6 mt-4">
                  <h3 className="font-semibold mb-2">Computer Education Levels:</h3>
                  <ul className="space-y-2">
                    <li>• Basic Course</li>
                    <li>• Diploma Course</li>
                    <li>• Advance Course</li>
                    <li>• Professional training of Hardware /Software Computer education with Computer LAB</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Education</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>SEE (Secondary Education Examination)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Tuition- from SEE upto Master level</span>
                  </li>
                </ul>

                <div className="pl-6 mt-4 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Subjects:</h3>
                    <p>Compulsory English, Major English</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Maths:</h3>
                    <p>Basic Maths, Business Maths</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Other Subjects:</h3>
                    <p>Accounting, Finance, Science, Economics and others</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gloriousnepaledu.com_language-classes_-grUWV5EHXhWPwU26DCZ3liSvBsuaRf.png"
                  alt="Korean Language Book"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
                <div className="mt-8 bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Extra Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Extra academic workshop programme and Training</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Modern teaching methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Experienced native and local instructors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Flexible class schedules</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

