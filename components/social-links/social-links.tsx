import classes from "./social-links.module.scss";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`${classes.list} ${className}`}>
      <li>
        <a
          href="https://github.com/user09users"
          className={`icon-github-circled ${classes.link}`}
        ></a>
      </li>
      <li>
        <a
          href="https://x.com/mikhieiulianov"
          className={`icon-twitter ${className} ${classes.link}`}
        ></a>
      </li>
    </ul>
  );
}
