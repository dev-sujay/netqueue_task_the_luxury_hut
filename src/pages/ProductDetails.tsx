import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowLeftRight, Calendar, Clock, ZoomIn } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/Product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import CartContext from "@/context/CartContext";
import { getProductAPI } from "@/api/productApi";

export default function ProductDetails() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  const carouselApi = React.useRef<CarouselApi | null>(null);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const params = useParams();
  const { addToCart } = React.useContext(CartContext) || {
    addToCart: () => {},
  };

  function convertToHTML(htmlString: string) {
    try {
      // Step 1: Replace escaped newlines with actual newlines
      let cleanedText = htmlString.replace(/\\r\\n|\\n/g, "\n");

      // Step 2: Remove unnecessary inline styles from <span>
      cleanedText = cleanedText
        .replace(/<span style="[^"]*">/g, "")
        .replace(/<\/span>/g, "");

      // Step 3: Preserve lists by temporarily replacing <ul> and <li> with placeholders
      cleanedText = cleanedText
        .replace(/<ul>/g, "[[UL]]")
        .replace(/<\/ul>/g, "[[/UL]]")
        .replace(/<li [^>]*>/g, "[[LI]]")
        .replace(/<\/li>/g, "[[/LI]]");

      // Step 4: Convert double newlines to paragraphs
      cleanedText = cleanedText.replace(/\n\n/g, "</p><p>");

      // Step 5: Convert single newlines to line breaks (but not inside lists)
      cleanedText = cleanedText.replace(/\n/g, "<br>");

      // Step 6: Wrap content in a paragraph
      cleanedText = `<p>${cleanedText}</p>`;

      // Step 7: Restore lists
      cleanedText = cleanedText
        .replace(/\[\[UL\]\]/g, '<ul class="styled-list">')
        .replace(/\[\[\/UL\]\]/g, "</ul>")
        .replace(/\[\[LI\]\]/g, "<li>")
        .replace(/\[\[\/LI\]\]/g, "</li>");

      return cleanedText;
    } catch (error) {
      console.error("Error converting HTML:", error);
      return "";
    }
  }

  React.useEffect(() => {
    const getProduct = async (id: string) => {
      try {
        setLoading(true);
        const data = await getProductAPI(id);
        setProduct({
          ...data,
          description: convertToHTML(data.description),
        });
      } catch (err) {
        console.error(err);
        toast.error("Error fetching product");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    getProduct(params?.id as string);
  }, [params.id]);

  // Handle carousel slide changes
  React.useEffect(() => {
    const api = carouselApi.current;
    if (!api) return;

    const handleSlideChange = () => {
      setCurrentImageIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSlideChange);
    return () => {
      api.off("select", handleSlideChange);
    };
  }, []);

  // Scroll to current image when index changes
  React.useEffect(() => {
    if (carouselApi.current) {
      carouselApi.current.scrollTo(currentImageIndex);
    }
  }, [currentImageIndex]);

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Image carousel */}
          <div className="relative space-y-4">
          <Carousel
              setApi={(api) => (carouselApi.current = api)}
              className="w-full"
            >
              <CarouselContent>
                {product?.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 z-10 bg-black/50 hover:bg-black/70"
                      >
                        <ZoomIn className="h-5 w-5 text-white" />
                      </Button>
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - View ${index + 1}`}
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70" />
            </Carousel>

            {/* Thumbnails Carousel */}
            <div className="hidden lg:block">
              <Carousel className="w-full">
                <CarouselContent className="gap-2">
                  {product?.images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/6 cursor-pointer"
                    >
                      <button
                        className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                          currentImageIndex === index
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Right side - Product details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{product?.name}</h1>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">
                  £{product?.regularPrice.toLocaleString()}
                </span>
                {product?.salePrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    £{product?.salePrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-muted-foreground">Condition:</span>{" "}
                <span className="font-medium">{product?.shortDescription}</span>
              </div>
              <div>
                <span className="text-muted-foreground">SKU:</span>{" "}
                <span className="font-medium">{product?.sku}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-600">
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                {product?.inStock
                  ? `${product?.stock} in stock`
                  : "Out of stock"}
              </Badge>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full text-lg py-6"
                size="lg"
                disabled={!product?.inStock}
                onClick={() => addToCart(product as Product, 1)}
              >
                ADD TO CART
              </Button>

              <Button variant="outline" className="w-full" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                WATCH THIS ITEM
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <ArrowLeftRight className="h-5 w-5" />
                PART EXCHANGE
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                BOOK AN APPOINTMENT
              </Button>
            </div>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Looking To Sell Your Watch?</h3>
                  <p className="text-muted-foreground">
                    Get An Instant Valuation Today – Sell Now!
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Product Details</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product?.attributes.map((attr) => (
                  <div key={attr.name} className="flex items-center gap-2">
                    <span className="text-sm font-medium">{attr.name}:</span>
                    <span className="text-sm">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <div
                className="text-sm prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: product?.description as string,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
