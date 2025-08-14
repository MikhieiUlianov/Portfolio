"use client";

import slugify from "slugify";
import { useEffect, useState } from "react";

import { getGitReposData, GitHubRepo } from "@/lib/projects-action";
import Section from "@/components/general-use/section/section";
import Slider from "@/utils/slider/slider";
import classes from "./project.module.scss";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [allProjects, setAllProjects] = useState<GitHubRepo[]>([]);
  const slug = params.slug;
  useEffect(() => {
    async function getProjects() {
      const res = await getGitReposData();
      setAllProjects(res);
    }
    getProjects();
  }, []);

  const matchedProject = allProjects.find(
    (p) => slugify(p.name, { lower: true }) === slug
  );

  if (!matchedProject) {
    return <p>Loading...</p>;
  }
  return (
    <Section sectionClass={classes.project}>
      <h1>{matchedProject.name}</h1>
      <Slider
        images={[
          "/img/dummy-images/dummy-img-1.jpg",
          "/img/dummy-images/dummy-img-2.jpg",
          "/img/dummy-images/dummy-img-3.jpg",
          "/img/dummy-images/dummy-img-2.jpg",
          "/img/dummy-images/dummy-img-3.jpg",
        ]}
      />
      <div className={classes.texts}>
        <p>
          Project description:{" "}
          <span>
            {matchedProject.description ? matchedProject.description : "---"}{" "}
          </span>
        </p>
        <div>
          Amount of start: <span> {matchedProject.stargazers_count} </span>
        </div>
        <div>
          Amount of forks: <span> {matchedProject.forks_count} </span>
        </div>
        <div>
          Project language: <span> {matchedProject.language} </span>
        </div>
        <div>
          Updated:
          <span>
            {new Date(matchedProject.updated_at).toLocaleDateString()}
          </span>
        </div>
        <div>
          Find out more
          <span>
            <a href={matchedProject.html_url}> here.</a>
          </span>
        </div>
      </div>
    </Section>
  );
}
