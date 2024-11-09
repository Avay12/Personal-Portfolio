import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export interface SkillItemProps {
  title: string;
  color: string;
  icon: React.ReactNode;
}

export default function SkillItem({ title, color, icon }: SkillItemProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  // Define animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="w-[22%] md:w-[23%] lg:w-[17%] space-y-6 h-[180px] md:h-[160px] flex-col flex justify-center items-center"
    >
      <span
        className={`md:w-[100px] text-[${color}] hover:scale-90 h-[70px] w-[70px] duration-300 md:h-[100px] object-contain`}
      >
        {icon}
      </span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={
          inView ? { opacity: 1, transition: { duration: 1 } } : { opacity: 0 }
        }
        className="text-center font-semibold duration-300 transition-all"
        style={{ color }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}
