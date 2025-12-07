"use client"

import { Button } from "@/src/components/ui/button"
import { TextEffect } from "@/src/components/ui/text-effect"
import { motion } from "framer-motion"
import { Mail, SendHorizonal } from "lucide-react"
import React, { useEffect, useState } from "react"
export default function WishlistPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(t)
  }, [toast])

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setToast({ type: "error", message: "Please enter an email address." })
      return
    }
    const emailRe = /^\S+@\S+\.\S+$/
    if (!emailRe.test(trimmed)) {
      setToast({ type: "error", message: "Please enter a valid email." })
      return
    }

    try {
      setLoading(true)
      const res = await fetch("/api/whishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json()
      if (!res.ok) {
        setToast({ type: "error", message: data?.error || "Failed to submit. Try again." })
      } else {
        setToast({ type: "success", message: "Thanks — you'll be added to the waitlist." })
        setEmail("")
      }
    } catch {
      setToast({ type: "error", message: "Network error. Try again later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div
          className="rounded-2xl p-10 md:p-14 shadow-xl"
          role="region"
          aria-labelledby="wl-title"
        >
          <div className="mx-auto max-w-xl text-center">
                <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="h1"
                                            className="text-balance text-5xl font-inter font-medium md:text-7xl">
                                          Uganda Coffe Forum
                                        </TextEffect>
                                        <TextEffect>
                                            A platform that connect's you with a global community to solve your farm challenges, learn new techniques, 
                                            and market your exceptional harvest directly to buyers.
                                        </TextEffect>
            <form onSubmit={handleSubmit} className="mt-8 flex items-center justify-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-xl border-outline p-1  shadow-sm">
                  <div className="relative grid grid-cols-[1fr_auto] items-center gap-2">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant size-5" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      type="email"
                      aria-label="email"
                      disabled={loading}
                      className="h-12 w-full pl-12 pr-4 placeholder:text-surface-variant focus:outline-none"
                    />
                    <div className="pr-1">
                      <Button
                        type="submit"
                        size="sm"
                        disabled={loading}
                        className="flex items-center gap-3 rounded-lg px-5 py-3 bg-primary hover:bg-primary-foreground text-primary-foreground"
                        aria-label="Join waitlist"
                      >
                        <SendHorizonal className="size-4" strokeWidth={2} />
                        <span className="hidden md:inline">{loading ? "Sending…" : "Join the waitlist"}</span>
                        <span className="md:hidden">{loading ? "…" : "Join"}</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-surface-variant">
                  We respect your privacy. No spam — unsubscribe anytime.
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* toast */}
      <div aria-live="assertive" className="fixed top-6 right-6 z-50">
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            role="status"
            className={
              `min-w-[220px] max-w-xs rounded-md px-4 py-2 text-sm font-medium shadow-lg transform ` +
              (toast.type === "success"
                ? "bg-success text-success-foreground"
                : "bg-red-600 text-white")
            }
          >
            {toast.message}
          </motion.div>
        )}
      </div>
    </div>
  )
}