import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <div>
      Testimonials
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({ stopOnInteraction: true, stopOnMouseEnter: true }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card className="size-24">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {testimonial.fullName}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
