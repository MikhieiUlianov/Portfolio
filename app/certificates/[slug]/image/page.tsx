import { notFound } from "next/navigation";
import { certificatesItems } from "@/components/SideData";
import Image from "next/image";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = certificatesItems.find((i) => i.slug === slug);
  if (!certificate) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={certificate.image} alt={certificate.title} />
    </div>
  );
}
