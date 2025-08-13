import { notFound } from "next/navigation";
import { certificatesItems } from "@/components/SideData";
import Image from "next/image";

export default function ImagePage({ params }: { params: { slug: string } }) {
  const certificate = certificatesItems.find((i) => i.slug === params.slug);
  if (!certificate) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={certificate.image} alt={certificate.title} />
    </div>
  );
}
