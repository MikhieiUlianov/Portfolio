"use client";

import Section from "@/components/section/section";
import classes from "./tools.module.scss";
import { skillsItems } from "@/components/SideData";
import useFilteredTools from "@/lib/filtering-logic";
import Image from "next/image";
import SkillItem from "@/components/Skills/skill-item";
export default function Tools() {
  let filteredItems = useFilteredTools(skillsItems);

  return (
    <Section>
      {filteredItems.length < 1 && (
        <div className={classes.error}>
          <Image
            src="/img/not-found.png"
            alt="there is no matched tools"
            width={300}
            height={300}
          />
          <h2>There is no matched tools.</h2>
        </div>
      )}
      <div className={classes.tools}>
        {filteredItems.map((skill, i) => (
          <SkillItem key={skill.title} {...skill} index={i} />
        ))}
      </div>
    </Section>
  );
}
