"use server";

export type GitHubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export async function getGitReposData() {
  const res = await fetch(`https://api.github.com/users/MikhieiUlianov/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Fetching repos failed.");

  const data: GitHubRepo[] = await res.json();

  return data;
}
