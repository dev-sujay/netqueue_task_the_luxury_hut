import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs"; 
import { Button } from "@/components/ui/button"
import { Mail, Pin } from "lucide-react";
import { Separator } from "./ui/separator";

export function SocialConnect() {
  return (
    <section className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 divide-x">
          {/* WhatsApp Section */}
          <div className="flex flex-col items-center text-center">
            <BsWhatsapp className="mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">WHATSAPP NOTIFICATION</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We've all experienced it – you see something you like, and before you even realise it.
            </p>
            <Button variant="link" className="underline">
              JOIN NOW
            </Button>
          </div>
          {/* separator vertial if large screen and horizontal if small */}
          {/* Social Media Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-6">OUR SOCIAL</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Pin className="h-5 w-5" />
                <span className="sr-only">Pinterest</span>
              </Button>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className="flex flex-col items-center text-center px-2">
            <h3 className="text-lg font-semibold mb-2">STAY CONNECTED!</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We've all experienced it – you see something you like, and before you even realise it.
            </p>
            <form className="w-full max-w-sm">
              <div className="relative flex w-full items-center border border-gray-200 hover:border-gray-300 focus-within:border-gray-400 transition-colors">
                <div className="absolute left-4">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 p-2 ms-10 bg-transparent outline-none text-base"
                />
                <Separator orientation="vertical" className="h-10" />
                <button type="submit" className=" text-sm px-2 py-3 font-normal hover:bg-transparent">
                  JOIN NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
