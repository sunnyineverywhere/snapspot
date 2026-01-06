import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarRating } from "@/components/sections/testimonials/star-rating"
import { cn } from "@/lib/utils"

export type Testimonial = {
  name: string
  title: string
  rating: number
  quote: string
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial
  className?: string
}) {
  const initials = testimonial.name.slice(0, 1)

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="pt-4">
        <StarRating value={testimonial.rating} />
        <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
          “{testimonial.quote}”
        </p>
      </CardContent>
      <CardFooter className="gap-3">
        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{testimonial.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {testimonial.title}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}


