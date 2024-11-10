import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/lib/type";
import { useActiveSection } from "@/context/active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref, inView };
}
