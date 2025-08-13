"use client";

import Section from "@/components/general-use/section/section";
import classes from "./projects.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { getGitReposData, GitHubRepo } from "@/lib/projects-action";

export default function MyProjectsList() {
  const [page, setPage] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    async function getData() {
      const newRepos = await getGitReposData(page);
      setRepos((oldRepos) => [...oldRepos, ...newRepos]);
      if (newRepos.length < 3) setIsFinished(true);
    }

    getData();
  }, [page]);

  if (!repos) return <p>Loading...</p>;
  return (
    <Section sectionClass={classes.projects}>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.name}>
              <Image
                alt={repo.name}
                src="/img/coding.jpg"
                width={100}
                height={100}
              />
              <a
                href={repo.html_url}
                /*  target="_blank" */ rel="noopener noreferrer"
              >
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p>
                  Language: <span>{repo.language}</span>
                </p>
                <p>Stars: {repo.stargazers_count}</p>
              </a>
            </li>
          );
        })}
      </ul>
      {!isFinished && (
        <StyledButton
          onClick={() => setPage((prev) => prev + 1)}
          className="margin"
        >
          Load More
        </StyledButton>
      )}
    </Section>
  );
}
