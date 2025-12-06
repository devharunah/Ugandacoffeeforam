import { Button } from '@/src/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { Input } from './ui/input'

export default function CallToAction() {
    return (
        <section className="bg-primary-foreground w-full md:py-32">
            <div className="mx-auto  max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Get started</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>
                    <form
                        action=""
                        className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                            <Input
                            type='Email'
                            placeholder='youremail...'
                            >
                            
                            </Input>
                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    aria-label="submit"
                                    className="rounded-(--radius)">
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal
                                        className="relative mx-auto size-5 md:hidden"
                                        strokeWidth={2}
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
