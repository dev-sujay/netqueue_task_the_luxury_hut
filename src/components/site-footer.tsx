import { Link } from "react-router-dom"
import { Phone, Clock, Mail, MapPin } from "lucide-react"
import moment from "moment"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-light text-xs">0207 242 9160</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-light text-xs">+44 7828750705</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="font-light text-xs">info@theluxuryhut.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="font-light text-xs">
                  Suite 27-31, 3rd Floor, New House, 67-68
                  <br />
                  Hatton Garden, London EC1N 8JY, UK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-light text-xs">
                  Monday – Friday: 9am – 6pm
                  <br />
                  Saturday: 10am – 5pm
                </span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-light text-xs" to="/sell-watch">Sell Your Watch</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sell-rolex">Sell Rolex Watch</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sell-cartier">Sell Cartier Watch</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sell-jewellery">Sell Your Jewellery</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sell-diamonds">Sell Diamonds</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/watch-valuation">Watch Valuation</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/rolex-valuation">Rolex Valuation</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/part-exchange">Part-Exchange</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/source-watch">Source A Watch</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/consignment">Watch Consignment</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/repairs">Watch Repairs</Link>
              </li>
            </ul>
          </div>

          {/* Shop Online */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SHOP ONLINE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-light text-xs" to="/watches">Buy Watches</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/jewellery">Buy Jewellery</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/rolex">Rolex Watches</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/new">New Arrivals</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/rings/diamond">Diamond Rings</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/watches/men">Men Watches</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/watches/women">Women Watches</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sale">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="font-light text-xs" to="/blog">Blogs</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/about">About Us</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/faq">FAQ</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/terms">Terms And Conditions</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/returns">Return Policy</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/sitemap">HTML Sitemap</Link>
              </li>
              <li>
                <Link className="font-light text-xs" to="/links">Links</Link>
              </li>
            </ul>
          </div>

          {/* Trust Badges and Delivery - Fifth Column */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-end gap-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daco_1534091%20(1)%201-B2whsiXUQBJslck1hfXEPEogtUGMzu.png"
                alt="Trustpilot Rating"
                className="w-2/3"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrono%201-52zgfmYSWaBAy7pM1Pv8IqsDo0drwZ.png"
                alt="Chrono24 Trusted Seller"
                className="w-1/3 h-2/3"
              />
            </div>

            <div className="space-y-4 text-center">
              <h4 className="text-sm font-medium">DELIVERY PARTNERS</h4>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fedex%201-lFvEpQAJiho8JBynAOfwjk2m2Ecus6.png"
                  alt="FedEx"
                  className="w-1/3"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Royal_Mail%201-N2xHWBGWlJ9dUqqbSg973KK7Gqu0pW.png"
                  alt="Royal Mail"
                  className="w-1/3"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dhl%201-wcKtFwKj9CS1Q0DxLoJKaHBCDcnuRs.png"
                  alt="DHL"
                  className="w-1/3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 border-t border-white/10 py-4 text-xs leading-6 font-light">
          Rolex Datejust  |  Rolex Daytona  |  Rolex Submariner  |  Rolex Explorer  |  Rolex Sea-Dweller  |  Rolex Yacht-Master  |  Rolex Day-DateRolex Oyster Perpetual  |   Rolex Milgauss  |  Cartier Watches  |   Jaeger LeCoultre WatchesOmega WatchesAudemars Piguet WatchesPatek Philippe WatchesPanerai WatchesBreitling Watches  |  Cartier Jewellery  |  Van Cleef & Arpels Jewellery  |  Bvlgari Jewellery  |  Chopard Jewellery  |  New Rings  |  Pre-Owned Rings  |  Engagement Rings  |  Wedding Rings  |  Solitaire Rings  |  Eternity Rings  |  Trilogy Rings  |  Dress Rings  |  Gifts For Her  |  Gifts For Him  |  Bracelets  |  Earrings  |  Necklaces  |  Jewellery SetsPendants  |  Gifts  |  Men Jewellery  |  Ladies Jewellery  |  New Jewellery
        </div>

        {/* Copyright and Payment */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            © {moment().format("YYYY")} | The Luxury Hut Registered As The Luxury Hut Limited | Companies House Registration No. 14704196 |
            VAT Number: 435611313
          </p>
          <div className="flex items-center gap-4">
             <span className="text-xs text-gray-400">Payment Methods:</span>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pay%20(1)%201-Rzw9W7m6hzUTQYKbs0r2xJBHeiyDKQ.png"
              alt="Payment Methods"
              className="w-75 h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

