import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg')] bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg">
              Capturing moments and memories from our educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="relative aspect-square group">
                <Image
                  src={"/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="text-sm font-medium">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
