"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/context/hook";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m currently studying{" "}
        <span className="font-medium">Computer Science</span>, driven by a
        passion for programming and problem-solving{" "}
        <span className="font-medium">I'm a full-stack web developer.</span> My
        core stack is{" "}
        <span className="font-medium">ASP.NET Core, Angular, and Next.js,</span>
        and I have experience with <span className="font-medium">
          NestJS
        </span>{" "}
        as well. I love diving into new technologies and constantly expanding my
        skill set, as I believe there’s always more to learn in this
        ever-evolving field. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        guitar, watching movies, playing football and travelling. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">music theory for guitar</span>.
      </p>
    </motion.section>
  );
}
