import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = (containerRef) => {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: window.innerWidth > 768,
      multiplier: 1.2,
      lerp: 0.13,
    });

    // --- THE FIX ---
    // This watches for ANY height changes and updates Locomotive automatically
    const resizeObserver = new ResizeObserver(() => {
      scrollRef.current?.update();
    });
    
    resizeObserver.observe(containerRef.current);
    
    // Extra safety: update after a short delay
    const timer = setTimeout(() => {
      scrollRef.current?.update();
    }, 1000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
      scrollRef.current?.destroy();
    };
  }, [containerRef, pathname]); // Re-init on route change

  return scrollRef;
};

export default useLocomotiveScroll;