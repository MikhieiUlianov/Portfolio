import Image from "next/image";
import { getGitReposData } from "@/lib/projects-action";
import ListTemplate from "@/components/UI/items-list/items-list";
import classes from "./projects.module.scss";
import Link from "next/link";
import slugify from "slugify";
import StyledButton from "@/components/UI/styled-button/styled-button";

export default async function MyProjectsList() {
  const repos = await getGitReposData();
  if (!repos) return <p>Loading...</p>;
  return (
    <ListTemplate removeButton>
      {repos.map((repo) => {
        const slug = slugify(repo.name, { lower: true });
        return (
          <li key={`${repo.name}-${repo.html_url}`} className={classes.project}>
            <Image
              alt={repo.name}
              src="/img/coding.jpg"
              width={100}
              height={100}
            />
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

              <StyledButton href={`/my-projects/${slug}`}>
                See Details
              </StyledButton>
            </div>
          </li>
        );
      })}
    </ListTemplate>
  );
}
