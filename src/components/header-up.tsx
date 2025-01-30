import { Mail, Star, ChevronDown, Navigation } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <div className="w-full bg-black text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center hover:text-gray-300">
            <Navigation className="h-4 w-4 mr-1" />
            Find Store
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <Mail className="h-4 w-4 mr-1" />
            Contact
          </a>
        </div>

        {/* Center section */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-green-500" strokeWidth={0} />
            ))}
            <Star
              className="h-4 w-4 fill-current text-green-500"
              strokeWidth={0}
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
          <span>4.5 Rating Based On Trustpilot</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            Read Reviews
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              USD
              <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>EUR</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

