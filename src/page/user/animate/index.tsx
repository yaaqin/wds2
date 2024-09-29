import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedComponent: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation when component mounts
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 }, // Initial state
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Animated state
      );
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className="bg-blue-500 text-white p-6 rounded-lg text-center"
    >
      <h1 className="text-3xl font-bold">Hello, GSAP with Tailwind!</h1>
    </div>
  );
};

export default AnimatedComponent;
