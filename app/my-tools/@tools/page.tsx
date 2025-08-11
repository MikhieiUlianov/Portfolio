"use client";

import Section from "@/components/section/section";
import classes from "./tools.module.scss";
import { skillsItems } from "@/components/SideData";
import useFilteredTools from "@/lib/filtering-logic";
import Image from "next/image";
import SkillItem from "@/components/skills/skill-item";
import { useState } from "react";
import StyledButton from "@/components/UI/styled-button/styled-button";

export default function Tools() {
  const [skillsAmount, setSkillsAmount] = useState({
    amount: 3,
    finished: false,
  });
  const skills = skillsItems.slice(0, skillsAmount.amount);
  let filteredItems = useFilteredTools(skills);

  function handleLoadMore() {
    setSkillsAmount((prev) => ({ ...prev, amount: prev.amount + 3 }));
    if (skillsAmount.amount >= skillsItems.length) {
      setSkillsAmount((prev) => ({ ...prev, finished: true }));
    }
  }

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
      {!skillsAmount.finished && (
        <StyledButton onClick={handleLoadMore} className="margin">
          Load More
        </StyledButton>
      )}
    </Section>
  );
}
