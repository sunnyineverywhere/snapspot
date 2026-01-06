import { StarIcon } from "lucide-react"

export function StarRating({ value }: { value: number }) {
  const full = Math.round(value)
  return (
    <div className="flex items-center gap-1" aria-label={`평점 ${value}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={[
            "size-4",
            i < full ? "fill-primary text-primary" : "text-muted-foreground/40",
          ].join(" ")}
        />
      ))}
    </div>
  )
}


