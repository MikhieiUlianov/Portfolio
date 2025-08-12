import ToolContent from "@/components/tool-page/tool-content/tool-content";
import { getToolData } from "@/lib/tools";

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const toolData = getToolData(params.slug);
    return (
      <ToolContent
        img={toolData.img}
        title={toolData.title}
        content={toolData.content}
      />
    );
  } catch (error) {
    return (
      <div>{error instanceof Error ? error.message : "Unknown error"}</div>
    );
  }
}
