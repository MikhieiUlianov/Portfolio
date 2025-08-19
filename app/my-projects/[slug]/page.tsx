"use client";

import slugify from "slugify";
import Section from "@/components/general-use/section/section";
import Slider from "@/utils/slider/slider";
import classes from "./project.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { notFound } from "next/navigation";
import { Suspense, use } from "react";
import Loading from "@/components/UI/Loading";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const allProjects = useSelector((state: RootState) => state.projects.repos);

  const matchedProject = allProjects.find(
    (p) => slugify(p.name, { lower: true }) === slug
  );

  if (!matchedProject) return notFound();
  return (
    <Section sectionClass={classes.project}>
      <Suspense fallback={<Loading />}>
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
            Project description:
            <span>
              {matchedProject.description ? matchedProject.description : "---"}
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
      </Suspense>
    </Section>
  );
}
