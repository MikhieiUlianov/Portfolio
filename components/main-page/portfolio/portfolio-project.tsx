import { GitHubRepo } from "@/lib/projects-action";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import classes from "./project.module.scss";
import slugify from "slugify";
import StyledButton from "@/components/UI/styled-button/styled-button";

type PortfolioProjectProps = {
  repo: GitHubRepo;
};

export default function PortfolioProject({ repo }: PortfolioProjectProps) {
  const slug = slugify(repo.name, { lower: true });

  return (
    <li key={uuidv4()} className={classes.project}>
      <Image alt={repo.name} src="/img/coding.jpg" width={100} height={100} />
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>
        Language: <span>{repo.language}</span>
      </p>
      <p>Stars: {repo.stargazers_count}</p>
      <div className={classes.actions}>
        <a className={classes.repoLink} href={repo.html_url}>
          See Repo
        </a>

        <StyledButton href={`/my-projects/${slug}`} className={classes.seeMore}>
          See Details
        </StyledButton>
      </div>
    </li>
  );
}
