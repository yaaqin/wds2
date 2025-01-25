import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Hook untuk animasi dengan GSAP dan ScrollTrigger
const useGsapScrollTrigger = (
  elementRef: RefObject<HTMLElement>, 
  animationDirection: 'left' | 'right' | 'top' | 'bottom' = 'bottom', // Default dari bawah
  options: gsap.plugins.ScrollTriggerInstanceVars = {},
  staggerOptions: gsap.StaggerVars = {}
) => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    if (elementRef.current) {
      // Tentukan nilai animasi berdasarkan arah
      const animationStart = {
        opacity: 0,
        ...(animationDirection === 'left' && { x: -100 }),   // Geser dari kiri
        ...(animationDirection === 'right' && { x: 100 }),   // Geser dari kanan
        ...(animationDirection === 'top' && { y: -100 }),    // Geser dari atas
        ...(animationDirection === 'bottom' && { y: 50 })    // Geser dari bawah (default)
      };

      // Jika elemen target memiliki child (untuk stagger animation)
      if (elementRef.current.children.length > 0) {
        // Stagger animasi untuk semua children
        gsap.fromTo(
          elementRef.current.children, // Menargetkan semua card/children di dalam kontainer
          { ...animationStart }, // Initial state berdasarkan arah
          {
            opacity: 1,
            x: 0,
            y: 0, // Semua arah kembali ke posisi normal
            duration: 1,
            ease: "power3.out",
            stagger: { ...staggerOptions, amount: 0.5 }, // Stagger untuk animasi bertahap
            scrollTrigger: {
              trigger: elementRef.current, // Elemen yang memicu animasi
              start: "top 80%", // Mulai animasi saat elemen mencapai 80% dari viewport
              toggleActions: "play reverse play reverse", // Animasi berjalan saat scroll ke atas/bawah
              ...options, // Override atau tambahan opsi ScrollTrigger
            },
          }
        );
      } else {
        // Jika tidak ada child (untuk single element animasi)
        gsap.fromTo(
          elementRef.current,
          { ...animationStart }, // Initial state berdasarkan arah
          {
            opacity: 1,
            x: 0,
            y: 0, // Semua arah kembali ke posisi normal
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elementRef.current, // Elemen yang memicu animasi
              start: "top 80%", // Mulai animasi saat elemen mencapai 80% dari viewport
              toggleActions: "play reverse play reverse", // Animasi berjalan saat scroll ke atas/bawah
              ...options, // Override atau tambahan opsi ScrollTrigger dari parameter
            },
          }
        );
      }
    }
  }, [elementRef, animationDirection, options, staggerOptions]); // Re-run jika `elementRef`, `direction`, atau `options` berubah
};

export default useGsapScrollTrigger;
