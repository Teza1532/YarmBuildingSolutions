import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Gallery() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // List of image filenames in /images/Carousel (add or remove as needed)
    const imageCount = 2 // Change this to the number of images you have
    const imageList = []
    for (let i = 1; i <= imageCount; i++) {
      imageList.push(`./images/Carousel/${i}.jpg`)
    }
    setImages(imageList)
  }, [])

  return (
    <section id="gallery" className="mt-10 py-20 bg-slate-950/40">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold underline-gold">Recent work</h2>
        <p className="mt-4 text-slate-300">
          Swipe to see more of our projects!
        </p>
        <div className="mt-8">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {images.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`Gallery ${idx + 1}`} className="rounded-2xl" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Gallery