import { UseSliderReturn } from '@/lib/types';
import { useCallback, useState } from 'react';

export function useSlider(
  totalItems: number,
  initialItemsPerView: number = 3
): UseSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(initialItemsPerView);

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
