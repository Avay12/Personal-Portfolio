import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wildOasisImg from "@/public/wild-oasis.png";
import { SiCsharp } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSC. CSIT",
    location: "Patan Dokha, lalitpur ",
    description:
      "Currently studying 4 years course . I immediately found a intern as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Intern as FullStack Developer",
    location: "Kageeshowri, Kathmandu",
    description:
      "I worked as a fullstack developer for 3 months in SBRC Company . I also upskilled my knowledge in fullstack Development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 Feb - April",
  },
  {
    title: "Full-Stack Developer",
    location: "Kageeshowri, Kathmandu",
    description:
      "I'm now a full-stack developer working in SBRC Info Sys. My stack includes C#, Asp.net core , Angular and Next js. I'm open to full-time opportunities.",
    icon: React.createElement(SiCsharp),
    date: "2024 May - September",
  },
] as const;

export const projectsData = [
  {
    title: "Wild-Oasis",
    description:
      "I worked in this Fullstack Project, Wild-oasis which is internal system for booking, reserve and check-in cabin",
    tags: ["React", "Supabase", "Postgres", "Tailwind", "Tanstack-Ouery"],
    imageUrl: wildOasisImg,
    link: "https://wild-oasis-admin-system.vercel.app",
    gitHubLink: "https://github.com/Avay12/Wild-Oasis-Admin-System",
  },
] as const;
