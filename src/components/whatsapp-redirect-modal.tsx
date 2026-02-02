'use client'

import { Button } from '@/src/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface WhatsAppRedirectModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function WhatsAppRedirectModal({ isOpen, onClose }: WhatsAppRedirectModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    const handleJoin = () => {
        window.open('https://chat.whatsapp.com/EGefoJqLnIO7YLOBWHnf99?mode=git_t', '_blank')
        onClose()
    }

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: '50%', x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.95, y: '50%', x: '-50%' }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 z-101 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">App in Test Mode</h3>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            The app is currently in test mode. To download the latest version, please join our official WhatsApp group.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                           <Button onClick={handleJoin} className="bg-[#035503] hover:opacity-90 text-white font-semibold">
                                Join WhatsApp Group
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}