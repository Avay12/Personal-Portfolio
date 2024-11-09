import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface SkillItems {
  title: string;
  color: string;
  icon: typeof SVGElement;
}
