import { getGitReposData } from "@/lib/projects-action";
import slugify from "slugify";

export async function generateStaticParams() {
  const projects = await getGitReposData();
  return projects.map((project) => {
    const projectSlug = slugify(project.name, { lower: true });
    return { params: { slug: projectSlug } };
  });
}
