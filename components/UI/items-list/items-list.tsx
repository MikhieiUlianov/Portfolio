import Section from "@/components/general-use/section/section";
import classes from "./items-list.module.scss";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { ReactNode } from "react";

type ListTemplateProps = {
  buttonAction?: () => void;
  children: ReactNode;
  isFinished?: boolean;
  removeButton?: boolean;
};

export default function ListTemplate({
  buttonAction,
  children,
  isFinished,
  removeButton,
}: ListTemplateProps) {
  return (
    <Section>
      <ul className={classes.list}>{children}</ul>
      {!isFinished && !removeButton && (
        <StyledButton onClick={buttonAction} className="margin">
          Load More
        </StyledButton>
      )}
    </Section>
  );
}
