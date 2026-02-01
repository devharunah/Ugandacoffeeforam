'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'What is Kawa?',
            answer: 'Kawa is a coffee marketplace that connects people across the coffee industry including farmers, suppliers, companies, and cafés—with those who need coffee. It serves as a central platform for sourcing, selling, and connecting around coffee.',
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'Are you planning to support Iphone',
            answer: 'Yes, we are planning to support iPhone. We’re actively working on iOS compatibility and will share updates as development progresses.',
        },
        {
            id: 'item-3',
            icon: 'credit-card',
            question: 'How much does it cost to use Kawa',
            answer: 'Kawa is FREE during our early stage testing period. More details on pricing will be coming soon with our commitment to transparency and flexibility.'
        },
        {
            id: 'item-4',
            icon: 'truck',
            question: 'What happens after the FREE testing period?',
            answer: 'After our FREE testing period, we\'ll transition to paid plans with expanded features and higher limits. Early access users will get special pricing and priority access to new features.'
        },
        {
            id: 'item-5',
            icon: 'globe',
            question: 'Is Kawa only available in Uganda',
            answer: 'No, Kawa is available globally. Users from around the world can access and benefit from Kawa\'s features and services.'
        },
    ]

    return (
        <section id='FQS' className="py-20 bg-linear-to-r from-white from-10%  via-30% to-green-50 to-90% ...">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="https://www.instagram.com/trykawa"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                         <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
