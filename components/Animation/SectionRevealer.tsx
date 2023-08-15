import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SectionRevealer = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("end");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative w-full overflow-hidden m-auto">
      <motion.div
        variants={{
          start: { opacity: 0, y: 50 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionRevealer;
