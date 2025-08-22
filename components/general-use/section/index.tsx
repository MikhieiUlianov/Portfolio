import { ReactNode } from "react";
import classes from "./section.module.scss";

export default function Section({
  children,
  sectionClass,
}: {
  children: ReactNode;
  sectionClass?: string;
}) {
  return (
    <section className={`${classes.section} ${sectionClass}`}>
      {children}
    </section>
  );
}
