import { useState, useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => {
            const newSet = new Set(prev);
            newSet.add(entry.target.dataset.id);
            return newSet;
          });

          // Opcjonalnie: przestań obserwować po pierwszym pokazaniu
          if (options.unobserveOnShow) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, defaultOptions);

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [options.dependencies || []]);

  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el;
  };

  const isVisible = (id) => visibleItems.has(String(id));

  return {
    setItemRef,
    isVisible,
    visibleItems,
  };
};

export default useScrollReveal;
