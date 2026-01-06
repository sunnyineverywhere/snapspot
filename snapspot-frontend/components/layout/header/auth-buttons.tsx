import Link from "next/link"

import { Button } from "@/components/ui/button"

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost">
        <Link href="/login">로그인</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">회원가입</Link>
      </Button>
    </div>
  )
}


