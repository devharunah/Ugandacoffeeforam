'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TeamSpotlight() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* LEFT: Image + Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#035503]/10">
              <img
                src="/images/harunah.jpg"
                alt="Kakooza Harunah"
                className="h-[420px] w-full object-cover"
              />
              {/* Socials – always visible */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 bg-white/90 py-3 backdrop-blur">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-[#035503] transition hover:opacity-70"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-[#035503] transition hover:opacity-70"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h1 className="mb-4 text-7xl font-bold tracking-tight md:text-4xl">
              Meet the Brain Behind It All
            </h1>

            <p className="mb-6 text-gray-600">
              The vision, strategy, and execution behind everything we build.
              Driven by clarity, discipline, and a deep respect for quality.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Kakooza Harunah
              </h3>
              <p className="text-sm text-[#035503]">
                CEO & CTO
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
