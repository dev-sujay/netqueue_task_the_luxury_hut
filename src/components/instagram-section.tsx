import { useRef } from "react"
import { ChevronLeft, ChevronRight, Heart, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

const instagramPosts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgrogiozf/image/upload/v1738050160/eed6f0af-8d17-4442-801c-93ab7bad15ff.png",
    alt: "Rolex Submariner underwater shot with blue coral background",
    likes: 120,
  },
]

export function InstagramSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="container py-12">
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground"> --- FOLLOW US ON</p>
          <h2 className="text-xl font-libre">Instagram @theluxuryhut</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth">
        {instagramPosts?.map((item, i) => (
          <div key={i} className="relative aspect-square w-[300px] flex-none overflow-hidden rounded-lg">
            <div className="absolute left-4 top-4 z-10">
              <Instagram className="h-5 w-5 text-white drop-shadow-lg" />
            </div>
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-white" fill="white" />
              <span className="text-sm text-white">120</span>
            </div>
            <img
              src={item.image}
              alt="Instagram post"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
