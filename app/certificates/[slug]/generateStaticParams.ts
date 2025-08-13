import { certificatesItems } from "@/components/SideData";

export function generateStaticParams() {
  return certificatesItems.map((cer) => ({ slug: cer.slug }));
}
