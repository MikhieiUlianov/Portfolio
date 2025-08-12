import { getAllToolsFiles } from "@/lib/tools";

export async function generateStaticParams() {
  const allTools = getAllToolsFiles();

  return allTools.map((toolName) => ({ slug: toolName.replace(/\.md$/, "") }));
}
