import { UseHeroSliderReturn } from '@/lib/types';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useHeroSlider(slidesCount: number): UseHeroSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slidesCount);
    setProgress(0);
  }, [slidesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount);
    setProgress(0);
  }, [slidesCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const resetAndStart = () => {
      setProgress(0);

      // Clear existing intervals
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (slideIntervalRef.current) {
        clearTimeout(slideIntervalRef.current);
      }

      // Progress bar animation
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 2;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);

      // Auto slide after 5 seconds
      slideIntervalRef.current = setTimeout(() => {
        nextSlide();
        resetAndStart();
      }, 5000);
    };

    resetAndStart();

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (slideIntervalRef.current) {
        clearTimeout(slideIntervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause on interaction
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  return {
    currentSlide,
    itemsPerView: 1, // Hero slider always shows 1 slide
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    canSlideNext: true, // Always can slide in hero
    canSlidePrev: true,
    pauseAutoPlay,
    resumeAutoPlay,
    setProgress,
  };
}
