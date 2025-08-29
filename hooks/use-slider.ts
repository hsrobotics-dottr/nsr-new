import { UseSliderReturn } from '@/lib/types';
import { useCallback, useEffect, useState } from 'react';

export function useSlider(
  totalItems: number,
  initialItemsPerView: number = 3
): UseSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(initialItemsPerView);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 640) {
          // Mobile: show 1 item
          setItemsPerView(1);
        } else if (width < 1024) {
          // Tablet: show 2 items
          setItemsPerView(2);
        } else {
          // Desktop: show 3 items
          setItemsPerView(3);
        }
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const nextSlide = useCallback(() => {
    const maxSlide = Math.max(0, totalItems - itemsPerView);
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  }, [totalItems, itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      const maxSlide = Math.max(0, totalItems - itemsPerView);
      setCurrentSlide(Math.min(Math.max(index, 0), maxSlide));
    },
    [totalItems, itemsPerView]
  );

  const canSlideNext = currentSlide < totalItems - itemsPerView;
  const canSlidePrev = currentSlide > 0;

  return {
    currentSlide,
    itemsPerView,
    nextSlide,
    prevSlide,
    goToSlide,
    canSlideNext,
    canSlidePrev,
  };
}
