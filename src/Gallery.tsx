import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Gallery() {
  const [images, setImages] = useState<string[]>([])
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  useEffect(() => {
    // List of image filenames in /images/Carousel (add or remove as needed)
    const imageCount = 2 // Change this to the number of images you have
    const imageList = []
    for (let i = 1; i <= imageCount; i++) {
      imageList.push(`/images/Carousel/${i}.jpg`)
    }
    imageList.push(`/images/Bathroom/bathroom-sink-before.png`)
    imageList.push(`/images/Bathroom/bathroom-sink-after.png`)
    imageList.push(`/images/Bathroom/Bathroom-Bath-before.png`)
    imageList.push(`/images/Bathroom/bathroom-bath-after.png`)


    setImages(imageList)
  }, [])

  const handleImageLoad = (idx: number) => {
    setLoadedImages(prev => new Set(prev).add(idx))
  }

  return (
    <section id="gallery" className="mt-10 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold underline-gold">Recent work</h2>
        <p className="mt-4 text-slate-300">
          Swipe to see more of our projects!
        </p>
        <div className="mt-8 carousel-container">
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            autoPlay
            transitionTime={500}
            interval={5000}
            swipeable={true}
            emulateTouch={true}
            stopOnHover={true}
          >
            {images.map((src, idx) => (
              <div key={idx} className="carousel-slide-wrapper">
                {!loadedImages.has(idx) && (
                  <div className="carousel-loading">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <img 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="carousel-image"
                  onLoad={() => handleImageLoad(idx)}
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Gallery