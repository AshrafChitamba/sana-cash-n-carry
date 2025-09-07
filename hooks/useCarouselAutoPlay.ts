import { useMotionValue } from "motion/react";
import { RefObject, useEffect, useState } from "react";

type UseCarouselAutoPlayProps = {
  items: unknown[];
  carouselContainerRef: RefObject<HTMLDivElement | null>;
};
const SCROLL_SPEED = 1;
const GRID_GAP = 32;

export const useCarouselAutoPlay = (props: UseCarouselAutoPlayProps) => {
  const [revealingItems, setRevealingItems] = useState(props.items);
  const horizontalPosition = useMotionValue(0);

  useEffect(() => {
    if (!props.carouselContainerRef.current) return;

    const containerElement = props.carouselContainerRef.current;

    const animateCarousel = () => {
      const firstItemElement = containerElement.children[0] as HTMLElement;
      const firstItemTotalWidth = firstItemElement.offsetWidth + GRID_GAP;
      const currentPosition = horizontalPosition.get();
      const newPosition = currentPosition - SCROLL_SPEED;

      if (Math.abs(newPosition) >= firstItemTotalWidth) {
        horizontalPosition.set(newPosition + firstItemTotalWidth);
        setRevealingItems((previousItems) => {
          const [firstItem, ...remainingItems] = previousItems;
          return [...remainingItems, firstItem];
        });
      } else {
        horizontalPosition.set(newPosition);
      }

      requestAnimationFrame(animateCarousel);
    };

    const animationId = requestAnimationFrame(animateCarousel);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [horizontalPosition]);

  return { revealingItems, horizontalPosition };
};
