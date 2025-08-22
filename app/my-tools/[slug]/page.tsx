import ToolContent from "@/components/tool-page/tool-content";
import { getToolData } from "@/lib/tools";
import { Suspense } from "react";
import Loading from "@/components/UI/Loading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const toolData = getToolData(slug);

  return {
    title: toolData.title,
    description: toolData.description || "My projects page which I worked on.",
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const toolData = getToolData(slug);
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
