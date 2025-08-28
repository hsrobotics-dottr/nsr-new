import { useCallback, useEffect, useRef } from 'react';

export function useResize(
  callback: (width: number) => void,
  delay: number = 100
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleResize = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        callback(window.innerWidth);
      }
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial call
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize, { passive: true });

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
    // Return undefined when window is not available
    return undefined;
  }, [handleResize]);

  return null;
}
