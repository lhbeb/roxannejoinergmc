"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const placeholder = '\u00a0';

  useEffect(() => {
    const element = typingTextRef.current;
    if (!element) return;

    const words = [
      'Touring & Ocean Kayaks',
      'Inflatable Adventure Kayaks',
      'Fishing & Angler Kayaks',
      'Whitewater & River Kayaks'
    ];
    let isAnimating = true;
    let currentIndex = 0;

    const sleep = (duration: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, duration));

    const typeWord = async (word: string) => {
      element.textContent = '';
      const letters = word.split('');
      for (const letter of letters) {
        if (!isAnimating) return;
        element.textContent = `${element.textContent}${letter}`;
        await sleep(80);
      }
    };

    const deleteWord = async () => {
      while (isAnimating && (element.textContent?.length ?? 0) > 0) {
        element.textContent = element.textContent?.slice(0, -1) ?? '';
        await sleep(35);
      }
      element.textContent = placeholder;
    };

    const animateLoop = async () => {
      element.textContent = placeholder;

      while (isAnimating) {
        const word = words[currentIndex];

        await typeWord(word);
        if (!isAnimating) break;

        await sleep(2200);
        if (!isAnimating) break;

        await deleteWord();
        if (!isAnimating) break;

        await sleep(300);
        if (!isAnimating) break;

        currentIndex = (currentIndex + 1) % words.length;
      }
    };

    animateLoop();

    return () => {
      isAnimating = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7F3E8]">
      <div className="container relative z-10 mx-auto px-4 py-6 md:py-8">
        <div className="mx-auto grid w-full max-w-[1120px] overflow-hidden rounded-2xl shadow-xl min-h-[500px] md:grid-cols-[1fr_1fr] md:items-stretch border border-[#123E52]/10">
          {/* Content panel */}
          <div className="order-2 flex w-full flex-col justify-center bg-[#123E52] p-6 sm:p-8 md:order-1 md:p-12 lg:p-14 text-[#F7F3E8]">
            {/* Kayak brand introduction */}
            <h1 className="max-w-[620px] text-2xl font-bold leading-tight text-[#F7F3E8] md:text-3xl lg:text-[34px]">
              <span
                ref={typingTextRef}
                className="mb-1 block min-h-[2.5em] lg:min-h-[1.25em] text-[#9BD4D3]"
              >
                {placeholder}
              </span>
              <span className="block leading-tight text-white font-heading">
                Find Your Own Water
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[580px] text-sm leading-relaxed text-[#F7F3E8]/85 md:text-base">
              RoxanneJoiner is a kayak business and brand offering kayaks and paddling gear for your next adventure on the water.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/search"
                className="inline-flex items-center rounded-full bg-[#397F86] px-6 py-3 text-sm font-semibold text-[#F7F3E8] hover:bg-[#2e686e] transition-colors shadow-sm"
              >
                Explore All Kayaks →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-[#F7F3E8]/50 px-6 py-3 text-sm font-semibold text-[#F7F3E8] hover:bg-[#F7F3E8] hover:text-[#123E52] transition-colors"
              >
                About the RoxanneJoiner Brand
              </Link>
            </div>
          </div>

          {/* Image panel */}
          <div className="relative order-1 min-h-[280px] overflow-hidden md:order-2 md:min-h-0 bg-[#123E52]/20">
            <Image
              src="/roxannejoiner-wave-hero.webp"
              alt="RoxanneJoiner touring kayak beside a curling ocean wave"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123E52]/60 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
