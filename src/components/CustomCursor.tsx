import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial state
    gsap.set([cursor, follower], { opacity: 0 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
        opacity: 1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
        opacity: 1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
      });
    };

    // Use event delegation for hover effects on links and buttons
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .cursor-pointer, input, textarea, select');
      
      if (isInteractive) {
        gsap.to(follower, {
          scale: 3,
          backgroundColor: 'rgba(20, 184, 166, 0.15)',
          borderColor: 'rgba(20, 184, 166, 0.5)',
          duration: 0.3,
        });
        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.3,
        });
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .cursor-pointer, input, textarea, select');
      
      if (isInteractive) {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(20, 184, 166, 1)',
          duration: 0.3,
        });
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-teal rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-brand-teal rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};
