"use client";

import Image from "next/image";
import { getGitReposData, GitHubRepo } from "@/lib/projects-action";
import ListTemplate from "@/components/UI/items-list/items-list";
import classes from "./projects.module.scss";
import slugify from "slugify";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { useFilteredRepos } from "@/lib/filtering-logic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, setLoading } from "@/store/projects-slice";
import { RootState } from "@/store/store";
import { v4 as uuidv4 } from "uuid";

export default function MyProjectsList() {
  const [page, setPage] = useState(1);
  const { repos, loading, isFinished } = useSelector(
    (state: RootState) => state.projects
  );
  const filteredRepos = useFilteredRepos(repos);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getRepos() {
      dispatch(setLoading(true));
      try {
        const newRepos: GitHubRepo[] = await getGitReposData(page);
        dispatch(setProjects(newRepos));
      } catch (error) {
        error instanceof Error ? error.message : "Something went wrong.";
      } finally {
        dispatch(setLoading(false));
      }
    }

    getRepos();
  }, [page]);

  return (
    <ListTemplate
      isFinished={isFinished}
      isButtonDisabled={loading}
      buttonAction={() => setPage((prev) => prev + 1)}
    >
      {filteredRepos.length < 1 && (
        <div className={classes.error}>
          <Image
            src="/img/not-found.png"
            alt="there is no matched tools"
            width={300}
            height={300}
          />
          <h2>There is no projects.</h2>
        </div>
      )}
      {filteredRepos.map((repo) => {
        const slug = slugify(repo.name, { lower: true });
        return (
          <li key={uuidv4()} className={classes.project}>
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
