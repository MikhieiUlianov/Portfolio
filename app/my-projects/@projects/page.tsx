"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getGitReposData, GitHubRepo } from "@/lib/projects-action";
import ListTemplate from "@/components/UI/items-list/items-list";
import classes from "./projects.module.scss";

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
    <ListTemplate
      buttonAction={() => setPage((prev) => prev + 1)}
      isFinished={isFinished}
    >
      {repos.map((repo) => {
        return (
          <li key={`${repo.name}-${repo.html_url}`} className={classes.project}>
            <Image
              alt={repo.name}
              src="/img/coding.jpg"
              width={100}
              height={100}
            />
            <a href={repo.html_url} rel="noopener noreferrer">
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
    </ListTemplate>
  );
}
