'use client';

import { Button } from '../ui/button';
import { cn } from '@/src/lib/utils';
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';

const APP_DOWNLOAD_URL = "https://www.mediafire.com/file/um0py3j8tkpo1ns/Kawa.apk/file";

const PhoneMockup = ({ imageUrl, alt, glowColor, className }: { imageUrl: string, alt: string, glowColor: string, className?: string }) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div 
        className="absolute -inset-2 rounded-[3rem] opacity-40 blur-2xl transition-all duration-500" 
        style={{ backgroundColor: glowColor }} 
      />
      <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-black overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
        <img src={imageUrl} alt={alt} className="w-full h-auto block object-cover" />
      </div>
    </div>
  );
};

export default function KawaHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0, 0.5], [20, 0, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0, 0.5], [-20, 0, 20]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const GradientText = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <span
      className={cn(
        'from-primary dark:from-primary bg-linear-to-r via-green-400 to-green-300 bg-clip-text text-transparent dark:via-green-300 dark:to-emerald-400',
        className,
      )}
    >
      {children}
    </span>
  );

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden py-16"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(3,85,3,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(3,85,3,0.15),rgba(30,30,40,0))]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(3,85,3,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_90%,rgba(3,85,3,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(122,221,122,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_20%,rgba(3,85,3,0.05),transparent_50%)]"></div>

        <div className="bg-noise absolute inset-0 opacity-[0.02]"></div>
        <div className="absolute inset-0 opacity-5 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(3,85,3,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(3,85,3,0.05)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03] dark:bg-[linear-gradient(rgba(3,85,3,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(3,85,3,0.05)_1px,transparent_1px)] dark:opacity-[0.02]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto max-w-7xl"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col text-center md:text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl font-inter">
                Kawa connects <GradientText>Farmers</GradientText> and{' '}
                <GradientText>Buyers</GradientText> directly
              </h2>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-muted-foreground mb-8 text-lg leading-relaxed font-manrope"
            >
              The future of coffee trading is direct and transparent. Kawa
              connects producers with roasters and cafes, giving everyone the
              power to trade without limits.{' '}
              <span className="text-foreground font-semibold">
                Fair trade for all.
              </span>
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  className="relative rounded-full"
                  onClick={() => window.open(APP_DOWNLOAD_URL, '_blank')}
                >
                  Download App
                  <Sparkles className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="bg-background/50 absolute inset-0 -z-10 rounded-full backdrop-blur-sm"></div>
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/30 hover:bg-primary/5 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              {['Direct Trade', 'Verified Quality', 'Global Reach'].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-foreground relative rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
                  >
                    <div className="border-primary/10 bg-background/80 dark:bg-background/30 absolute inset-0 rounded-full border backdrop-blur-md dark:border-white/5"></div>
                    <div className="via-primary/20 dark:via-primary/30 absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-green-500/0 to-green-500/0 dark:from-green-500/0 dark:to-green-500/0"></div>

                    <span className="relative z-10">{feature}</span>
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            ref={mockupRef}
            className="relative mx-auto flex justify-center perspective-distant transform-3d"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              mouseX.set(x);
              mouseY.set(y);

              if (!isHovered) {
                setIsHovered(true);
              }
            }}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
              setIsHovered(false);
            }}
          >
            <motion.div
              className="relative z-10 transform-3d"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                scale: {
                  duration: 0.3,
                  type: 'spring',
                  ease: [0.34, 1.56, 0.64, 1],
                },
              }}
            >
              <PhoneMockup
                imageUrl="/images/appmockup.jpeg"
                alt="Kawa mobile app"
                glowColor={
                  isDark ? 'rgba(3, 85, 3, 0.5)' : 'rgba(3, 85, 3, 0.25)'
                }
                className="max-w-[380px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
