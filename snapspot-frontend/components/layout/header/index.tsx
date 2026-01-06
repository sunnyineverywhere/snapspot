import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/header/logo"
import { NavLinks } from "@/components/layout/header/nav-links"
import { AuthButtons } from "@/components/layout/header/auth-buttons"
import { MobileMenu } from "@/components/layout/header/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="h-16">
        <div className="flex h-full items-center justify-between gap-4">
          <Logo />
          <NavLinks className="hidden md:flex" />
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <AuthButtons />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}


