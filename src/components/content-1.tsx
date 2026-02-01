'use client'
import { Button } from '@/src/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import WhatsAppModal from './whatsapp-modal'

export default function ContentSection() {
    const [showModal, setShowModal] = useState(false)
    return (
        <section id='about' className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:gap-20 items-center">
                    {/* Image column */}
                    <div className="flex justify-center sm:justify-start">
                        <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-lg">
                            {/* dark, opacitated background + subtle blur */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm pointer-events-none" />
                            <div className="relative">
                                <Image
                                    src="/images/adult.jpg"
                                    alt="connections"
                                    width={800}
                                    height={800}
                                    className="block w-full h-auto object-cover transform transition-transform duration-500 ease-out hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="space-y-5">
                    <h2 className="relative z-10 mx-auto max-w-xl text-3xl font-medium text-center sm:text-left sm:text-4xl lg:text-5xl">
                        Post Your Coffee and Products Online
                    </h2>
                        <p className="text-muted-foreground  font-manrope text-lg leading-relaxed">
                            We empower farmers, cafes, and suppliers by{' '}
                            <span className="text-accent-foreground font-semibold">providing a simple way to post and showcase their coffee online</span>.
                        </p>

                        <p className="text-muted-foreground font-manrope text-lg  leading-relaxed">
                            Create an account to upload your inventory, set prices, and share details. Your products become instantly visible to a marketplace of potential buyers looking for quality coffee.
                        </p>

                        <div className="pt-2">
                            <Button 
                            asChild
                            className="shadow-sm">
                               <a href="/kawa.apk" download onClick={() => setShowModal(true)}>
                                <span>Download Kawa</span>
                               </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

             <div className="mx-auto  max-w-5xl py-20 px-6">
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:gap-20 items-center">
                    {/* Text column */}
                    <div className="space-y-5">
                    <h2 className="relative z-10 text-3xl font-inter font-medium text-center sm:text-left sm:text-4xl lg:text-5xl">
                     Get Connected to People Who Need It
                </h2>
                        <p className="text-muted-foreground font-manrope text-lg leading-relaxed">
                          Our platform bridges the gap, ensuring you  <span className="text-accent-foreground font-semibold">connect directly with the people who need your coffee</span>.
                          
                        </p>
                        <p className="text-muted-foreground font-manrope text-lg leading-relaxed">
                        Reach buyers, roasters, and coffee enthusiasts directly. By listing your products, you open the door to new business relationships and direct trade opportunities without intermediaries.
                        </p>

                        <div className="pt-2">
                            <Button 
                             asChild
                            className="shadow-sm">
                                <a href="/kawa.apk" download onClick={() => setShowModal(true)}>
                                <span>Download Kawa</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                    {/* Image column */}
                    <div className="flex justify-center sm:justify-start">
                        <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-lg">
                            {/* dark, opacitated background + subtle blur */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm pointer-events-none" />
                            <div className="relative">
                                <Image
                                    src="/images/comunity.jpg"
                                    alt="community"
                                    width={800}
                                    height={800}
                                    className="block w-full h-auto object-cover transform transition-transform duration-500 ease-out hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    )
}
