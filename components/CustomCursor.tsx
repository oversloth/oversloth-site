import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };
    
    handleResize();

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      // Make visible on first move
      if (!isVisible) setIsVisible(true);
      
      // Direct update for lowest latency
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    
    // Handle mouse leaving the window
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      <style>{`
        @keyframes cursorHalo {
          0% { background-color: rgba(168, 85, 247, 0.4); } /* Purple */
          33% { background-color: rgba(236, 72, 153, 0.4); } /* Pink */
          66% { background-color: rgba(59, 130, 246, 0.4); } /* Blue */
          100% { background-color: rgba(168, 85, 247, 0.4); } /* Purple */
        }
        .animate-cursor-halo {
          animation: cursorHalo 4s infinite linear;
        }
      `}</style>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none will-change-transform transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '-20px', // Center the halo
          marginTop: '-20px',
          zIndex: 9999, // High z-index but below system cursor
        }}
      >
        <div 
          className="w-full h-full rounded-full blur-md animate-cursor-halo"
        />
      </div>
    </>
  );
};
