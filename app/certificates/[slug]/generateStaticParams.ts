import { certificatesItems } from "@/components/SideData";

export default function generateStaticParams() {
  return certificatesItems.map((cer) => ({ slug: cer.slug }));
}
