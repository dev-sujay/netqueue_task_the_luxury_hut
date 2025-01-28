import * as React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <nav className="flex flex-col space-y-4 mt-6">
          <Link to="/watches" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            WATCHES
          </Link>
          <Link to="/jewellery" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            JEWELLERY
          </Link>
          <Link to="/rolex" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            ROLEX
          </Link>
          <Link to="/new" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            NEW IN
          </Link>
          <Link to="/sale" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            SALE
          </Link>
          <Link to="/sell-watch" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            SELL A WATCH
          </Link>
          <Link to="/sell-rolex" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            SELL ROLEX
          </Link>
          <Link to="/sell-jewellery" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            SELL JEWELLERY
          </Link>
          <Separator className="my-2" />
          <Link to="/exchange" onClick={() => setOpen(false)} className="text-sm hover:text-foreground/80">
            EXCHANGE
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

