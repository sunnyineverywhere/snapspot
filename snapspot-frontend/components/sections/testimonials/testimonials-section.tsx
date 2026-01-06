import { Container } from "@/components/layout/container"
import {
  TestimonialCard,
  type Testimonial,
} from "@/components/sections/testimonials/testimonial-card"

const TESTIMONIALS: Testimonial[] = [
  {
    name: "김하늘",
    title: "커플 스냅 · 서울",
    rating: 5,
    quote:
      "작가님 스타일을 비교해보고 바로 예약할 수 있어서 너무 편했어요. 결과물도 정말 만족!",
  },
  {
    name: "이준호",
    title: "프로필 촬영 · 부산",
    rating: 5,
    quote:
      "예산에 맞는 작가를 찾기 쉬웠고, 일정 조율도 메시지로 빠르게 해결됐습니다.",
  },
  {
    name: "박지아",
    title: "가족 촬영 · 인천",
    rating: 5,
    quote:
      "처음 예약이라 걱정했는데 결제/환불 정책이 명확해서 안심하고 진행했어요.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            실제 사용자 후기
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            SnapSpot에서 예약한 사용자들의 생생한 후기를 확인해 보세요.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  )
}


