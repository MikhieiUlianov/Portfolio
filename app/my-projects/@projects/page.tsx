"use client";

import Image from "next/image";
import { getGitReposData, GitHubRepo } from "@/lib/projects-action";
import ListTemplate from "@/components/UI/items-list/items-list";
import classes from "./projects.module.scss";
import { useFilteredRepos } from "@/lib/filtering-logic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, setLoading } from "@/store/projects-slice";
import { RootState } from "@/store/store";
import PortfolioProject from "@/components/main-page/portfolio/portfolio-project";

export default function MyProjectsList() {
  const [page, setPage] = useState(1);
  const { repos, loading, isFinished } = useSelector(
    (state: RootState) => state.projects
  );
  const filteredRepos = useFilteredRepos(repos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 1 && repos.length > 0) return;

    async function getRepos() {
      dispatch(setLoading(true));
      try {
        const newRepos: GitHubRepo[] = await getGitReposData(page);
        dispatch(setProjects(newRepos));
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.message : "Something went wrong."
        );
      } finally {
        dispatch(setLoading(false));
      }
    }

    getRepos();
  }, [page, dispatch, repos.length]);

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
      {filteredRepos.map((repo, i) => {
        return <PortfolioProject repo={repo} key={`${i}-${repo.full_name}`} />;
      })}
    </ListTemplate>
  );
}
