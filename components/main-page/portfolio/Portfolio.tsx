"use client";

import classes from "./portfolio.module.scss";
import Section from "@/components/general-use/section/section";
import PortfolioProject from "./portfolio-project";
import { getGitReposData } from "@/lib/projects-action";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, setLoading } from "@/store/projects-slice";
import { GitHubRepo } from "@/lib/projects-action";
import { RootState } from "@/store/store";

export default function Portfolio() {
  const dispatch = useDispatch();
  const { repos } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    async function getRepos() {
      dispatch(setLoading(true));
      try {
        const newRepos: GitHubRepo[] = await getGitReposData(1);
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
  }, [dispatch]);

  return (
    <Section sectionClass={classes.portfolio}>
      <h2 className="title title_fz16 title__section-title">Portfolio</h2>
      <div className="title title_fz36 title__section-subtitle">My works</div>
      <div className="divider"></div>

      <div className={classes.wrapper}>
        {repos.map((repo, i) => (
          <PortfolioProject key={`${i}-${repo.full_name}`} repo={repo} />
        ))}
      </div>
      <StyledButton href={"/my-projects"} className={classes.seeMore}>
        See More
      </StyledButton>
    </Section>
  );
}
