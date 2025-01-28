
export function HeroSection() {
  return (
    <section className="container-fluid grid gap-8 md:grid-cols-2 md:items-center pb-10 md:pb-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QAMLHUfsxO67cmZKbHS7riqZw3PsDD.png"
          alt="Luxury watches in display case"
          className="object-cover h-full"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="space-y-8 text-center max-w-3xl mx-auto w-[70%]">
        <div className="space-y-4">
          <h1 className="text-3xl font-normal md:text-4xl lg:text-5xl font-libre">New Arrivals</h1>
          <p className="text-muted-foreground text-sm md:text-base font-questrial">
            Discover a curated collection of pre-owned luxury watches and fine jewellery at our London showroom. Find
            timeless elegance and exceptional quality in every piece.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex aspect-square items-center justify-center rounded-full bg-slate-50 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gNvfXsyKsJ1HVITls56qOgMPAx5H1J.png"
              alt="Rolex"
              className="h-auto w-full"
            />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-full bg-slate-50 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7PktEMnRwr4LWsfdvKPcXRDQAj8xN9.png"
              alt="Omega"
              className="h-auto w-full"
            />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-full bg-slate-50 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3TExDpIY0jQjuNWDpk482rSCZQpg8x.png"
              alt="Patek Philippe"
              className="h-auto w-full"
            />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-full bg-slate-50 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KqSWVl789wHWiIioJ2AdfxJA8E948O.png"
              alt="Cartier"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

