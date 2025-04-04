import { useState } from "react";
import Navigation from "../components/Navigation";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: "/gallery/image1.jpg",
      alt: "Quiz Competition 2023",
      category: "Events"
    },
    {
      id: 2,
      src: "/gallery/image2.jpg",
      alt: "Winners Ceremony",
      category: "Awards"
    },
    {
      id: 3,
      src: "/gallery/image3.jpg",
      alt: "Team Discussion",
      category: "Teams"
    },
    {
      id: 4,
      src: "/gallery/image4.jpg",
      alt: "Question Round",
      category: "Events"
    },
    {
      id: 5,
      src: "/gallery/image5.jpg",
      alt: "Audience",
      category: "Events"
    },
    {
      id: 6,
      src: "/gallery/image6.jpg",
      alt: "Special Round",
      category: "Events"
    }
  ];

  return (
    <div className="min-h-screen bg-quiz-dark">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Photo <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Capturing memorable moments from our quiz competitions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images.find(img => img.id === selectedImage)?.src}
              alt={images.find(img => img.id === selectedImage)?.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-quiz-accent transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 