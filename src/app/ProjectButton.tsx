"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ButtonWrapper = () => {
  return (
    <div className="border-2 border-red-200 w-full h-full">
      <NeumorphismButton />
    </div>
  );
};



const TRANSLATE_RANGE = 60.0;

const NeumorphismButton = () => {

  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const theta = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotationDegree = useSpring(theta, { stiffness: 300, damping: 30});
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;
  const rot_transform = useMotionTemplate`rotateZ(${rotationDegree}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the div
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Map mouse coordinates to translation range
    const tX = (mouseX / width - 0.5) * TRANSLATE_RANGE;
    const tY = (mouseY / height - 0.5) * TRANSLATE_RANGE;

    x.set(tX);
    y.set(tY);
    theta.set(Math.sin(tX) * 30.0)
  };

  const handleMouseLeave = () => {
      x.set(0);  // Reset rotations on mouse leave
      y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }} className="border-2 border-red-600 w-full h-full"
    >
      <div className="border-2 border-red-400 w-full h-full flex items-center justify-center">
        <button onClick={() => window.location.reload()} className="border-2 border-red-300 w-[30%] h-[30%] flex items-center justify-center">
          <img src="/official_profile_picture.svg" alt="Globe Logo" className="border-2 border-red-200" />
        </button>
      </div>
      
    </motion.div>
    
  );
};

export default ButtonWrapper;
