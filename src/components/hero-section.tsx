"use client"

import { AnimatedGroup } from '@/src/components/ui/animated-group'
import { Button } from '@/src/components/ui/button'
import { TextEffect } from '@/src/components/ui/text-effect'
import { Variants } from 'framer-motion'
import { Mail, SendHorizonal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { HeroHeader } from '../common/header'


const transitionVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12,
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 1.5,
        },
    },
}

export default function HeroSection() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null)

    useEffect(() => {
        if (!toast) return
        const t = setTimeout(() => setToast(null), 4000)
        return () => clearTimeout(t)
    }, [toast])

    async function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault()
        const trimmed = email.trim()
        if (!trimmed) {
            setToast({ type: 'error', message: 'Please enter an email address.' })
            return
        }
        const emailRe = /^\S+@\S+\.\S+$/
        if (!emailRe.test(trimmed)) {
            setToast({ type: 'error', message: 'Please enter a valid email.' })
            return
        }

        try {
            setLoading(true)
            const res = await fetch('/api/whishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmed }),
            })
            const data = await res.json()
            if (!res.ok) {
                setToast({ type: 'error', message: data?.error || 'Failed to submit. Try again.' })
            } else {
                setToast({ type: 'success', message: 'Thanks — you have been added to the waitlist.' })
                setEmail('')
            }
        } catch (err) {
            setToast({ type: 'error', message: 'Network error. Try again later.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <HeroHeader />
            <main className="bg-linear-to-r from-white from-10%  via-30% to-green-50 to-90% ...   overflow-hidden">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-inter font-medium md:text-7xl">
                              Ask,Learn and Sell Quality Coffee
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto font-manrope mt-6 max-w-2xl text-pretty text-lg">
                             A platform that connect's you with a global community to solve your farm challenges, learn new techniques, and market your exceptional harvest directly to buyers.
                            </TextEffect>
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    item: transitionVariants,
                                }}
                                className="mt-12">
                                <form
                                    id='newsletter'
                                    onSubmit={handleSubmit}
                                    className="mx-auto max-w-sm"
                                    aria-live="polite"
                                >
                                    <div  className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)]  pr-2 shadow shadow-zinc-950/5">
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your mail address"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                            aria-label="email"
                                            disabled={loading}
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded flex items-center gap-2"
                                                disabled={loading}
                                            >
                                                <span className="hidden md:block">{loading ? 'Sending…' : 'Join waitlist'}</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
            <div aria-live="assertive" className="fixed top-6 right-6 z-50">
                {toast && (
                    <div
                        role="status"
                        className={
                            `min-w-[220px] max-w-xs rounded-md px-4 py-2 text-sm font-medium shadow-lg transform transition-all ` +
                            (toast.type === 'success'
                                ? 'bg-green-600 text-white'
                                : toast.type === 'error'
                                ? 'bg-red-600 text-white'
                                : 'bg-zinc-800 text-white')
                        }
                    >
                        {toast.message}
                    </div>
                )}
            </div>
        </>
    )
}

