"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";

import classes from "./styled-button.module.scss";

type StyledButtonProps = {
  children: ReactNode;
  className?: string;
};

type StyledButtonButton = ComponentPropsWithoutRef<"button"> &
  StyledButtonProps & {
    href?: never;
  };
type StyledButtonLink = LinkProps &
  StyledButtonProps & {
    onClick?: never;
  };

function isAnchorLink(
  props: StyledButtonButton | StyledButtonLink
): props is StyledButtonLink {
  return "href" in props;
}

export default function StyledButton(
  props: StyledButtonButton | StyledButtonLink
) {
  const { children, className } = props;

  if (isAnchorLink(props)) {
    const { href, ...linkProps } = props;
    return (
      <motion.p
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link
          {...linkProps}
          className={`${classes.loadMore} ${className || ""}`}
          href={href}
        >
          {children}
        </Link>
      </motion.p>
    );
  } else {
    const { ...buttonProps } = props;
    return (
      <motion.p
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <button
          {...buttonProps}
          className={`${classes.loadMore} ${className || ""}`}
        >
          {children}
        </button>
      </motion.p>
    );
  }
}
