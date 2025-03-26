"use client"

import { AuthProvider } from "@/components/auth/auth-context"
import { StrataPortal } from "@/components/strata-portal"

export function LayoutWrapper() {
  return (
    <AuthProvider>
      <StrataPortal />
    </AuthProvider>
  )
}

