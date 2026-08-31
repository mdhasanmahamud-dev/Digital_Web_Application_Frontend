import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    stiffness: 350,
    damping: 28,
    mass: 0.4,
  });

  const sy = useSpring(y, {
    stiffness: 350,
    damping: 28,
    mass: 0.4,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target;

      setHover(!!t.closest("a,button,[data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:block h-5 w-5 rounded-full bg-white mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          scale: hover ? 1.8 : 1,
        }}
        transition={{
          scale: {
            duration: 0.25,
          },
        }}
      />

      {/* Glow Effect */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[99] hidden md:block h-72 w-72 rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(0,96,255,0.25) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
};

export default Cursor;
