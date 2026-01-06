import { Container } from "@/components/layout/container"
import { FeatureCard } from "@/components/sections/features/feature-card"
import {
  CalendarCheckIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react"

const FEATURES = [
  {
    icon: <ShieldCheckIcon className="size-5" />,
    title: "검증된 전문 작가",
    description:
      "포트폴리오와 리뷰를 기반으로 신뢰할 수 있는 작가만 선별해 소개합니다.",
  },
  {
    icon: <CalendarCheckIcon className="size-5" />,
    title: "간편한 예약",
    description:
      "원하는 일정과 옵션을 선택하면 한 번에 예약이 완료돼요. 메시지로 조율도 간단합니다.",
  },
  {
    icon: <SparklesIcon className="size-5" />,
    title: "다양한 촬영 유형",
    description:
      "프로필, 웨딩, 가족, 브랜드까지 목적에 맞는 촬영 유형을 쉽게 찾을 수 있어요.",
  },
  {
    icon: <CreditCardIcon className="size-5" />,
    title: "안전한 결제",
    description:
      "안전한 결제와 환불 정책으로 안심하고 거래할 수 있도록 지원합니다.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            예약 경험을 더 간단하게
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            SnapSpot은 촬영 전 과정(탐색-비교-예약-결제)을 한 곳에서 빠르게
            제공합니다.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}


