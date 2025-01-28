import { Truck, Store, Shield, RotateCcw } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Truck className="h-8 w-8 mb-4" />
            <h3 className="text-sm font-medium">FREE NEXT-DAY DELIVERY</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Store className="h-8 w-8 mb-4" />
            <h3 className="text-sm font-medium">VIEW & TRY IN OUR SHOWROOM</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Shield className="h-8 w-8 mb-4" />
            <h3 className="text-sm font-medium">AUTHENTICITY CERTIFICATE</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <RotateCcw className="h-8 w-8 mb-4" />
            <h3 className="text-sm font-medium">EASY RETURN POLICY</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
