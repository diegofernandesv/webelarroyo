import { useState, useEffect, useRef, useCallback } from "react";

export const useParallax = (speed = 0.5, offset = 0) => {
  const [transform, setTransform] = useState("translateY(0px)");
  const elementRef = useRef(null);

  const updateTransform = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const scrolled = window.pageYOffset;
    const rate = scrolled * speed;
    const yPos = -(rate + offset);

    setTransform(`translateY(${yPos}px)`);
  }, [speed, offset]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateTransform();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateTransform]);

  return { transform, elementRef };
};

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { isVisible, elementRef };
};

export const useMouseParallax = (strength = 20) => {
  const [transform, setTransform] = useState("translate(0px, 0px)");
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      const moveX = deltaX * strength;
      const moveY = deltaY * strength;

      setTransform(`translate(${moveX}px, ${moveY}px)`);
    };

    const handleMouseLeave = () => {
      setTransform("translate(0px, 0px)");
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [strength]);

  return { transform, elementRef };
};
