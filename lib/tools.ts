import fs from "fs";
import matter from "gray-matter";
import path from "path";

const toolsPath = path.join(process.cwd(), "toolsPages");

type ToolMetaData = {
  img: string;
  description: string;
  title: string;
  date: string;
};
export type ToolFileType = ToolMetaData & {
  slug: string;
  content: string;
};

export function getAllToolsFiles(): string[] {
  return fs.readdirSync(toolsPath);
}

export function getToolData(identifier: string): ToolFileType {
  const slug = identifier.replace(/\.md$/, "");
  const toolPath = path.join(process.cwd(), "toolsPages", `${slug}.md`);
  const toolData = fs.readFileSync(toolPath);
  const { data, content } = matter(toolData);
  return {
    slug,
    ...(data as ToolMetaData),
    content,
  };
}

export function getAllTools() {
  const toolsNames = getAllToolsFiles();
  const tools = toolsNames.map((tool) => getToolData(tool));
  const sortedTools = tools.sort((toolA, toolB) =>
    toolA.date > toolB.date ? -1 : 1
  );

  return sortedTools;
}
