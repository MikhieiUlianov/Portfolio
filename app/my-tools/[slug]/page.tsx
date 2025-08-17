import ToolContent from "@/components/tool-page/tool-content/tool-content";
import { getToolData } from "@/lib/tools";
import { Suspense } from "react";
import Loading from "@/components/UI/Loading";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const toolData = getToolData(params.slug);

  return {
    title: toolData.title,
    description: toolData.description || "My projects page which I worked on.",
  };
}

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const toolData = getToolData(params.slug);
    return (
      <Suspense fallback={<Loading />}>
        <ToolContent
          img={toolData.img}
          title={toolData.title}
          content={toolData.content}
        />
      </Suspense>
    );
  } catch (error) {
    return (
      <div>{error instanceof Error ? error.message : "Unknown error"}</div>
    );
  }
}
