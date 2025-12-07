'use client'
import { Button } from '@/src/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function ContentSection() {
    const router = useRouter()
    return (
        <section className="py-16 md:py-24">
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
                        Connecting Coffee Farmers to the World
                    </h2>
                        <p className="text-muted-foreground  font-manrope text-lg leading-relaxed">
                            Our marketplace connects coffee farmers to the world by{' '}
                            <span className="text-accent-foreground font-semibold">giving them a simple way to share their products online</span>.
                        </p>

                        <p className="text-muted-foreground font-manrope text-lg  leading-relaxed">
                            Once a farmer creates an account, they can immediately start posting their coffee or coffee-related products on the platform.
                            Buyers can view posts, like, and comment. When interested, buyers can access the farmer’s phone number to contact them directly.
                        </p>

                        <div className="pt-2">
                            <Button 
                            onClick={()=>{router.push('/whishlist')}}
                            className="shadow-sm">
                               
                                <span>Join the Marketplace</span>
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
                     A Community for Learning and Support
                </h2>
                        <p className="text-muted-foreground font-manrope text-lg leading-relaxed">
                          Our platform gives coffee farmers a space to  <span className="text-accent-foreground font-semibold">learn from each other and grow</span> together
                          
                        </p>
                        <p className="text-muted-foreground font-manrope text-lg leading-relaxed">
                        Once a farmer joins the community, they can ask questions, share tips, and post what they’re using in the industry. Other farmers can reply, comment, and exchange ideas, creating a supportive place where everyone can discover new practices and improve their skills.
                        </p>

                        <div className="pt-2">
                            <Button 
                             onClick={()=>{router.push('/whishlist')}}
                            className="shadow-sm">
                                <span>Start Learning</span>
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
        </section>
    )
}
