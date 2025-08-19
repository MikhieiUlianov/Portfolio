import { notFound } from "next/navigation";
import { certificatesItems } from "@/components/SideData";
import ModalBackdrop from "@/components/UI/modals/modal-backdrop";
import Image from "next/image";
import classes from "./modal.module.scss";

export default async function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = await certificatesItems.find((i) => i.slug === slug);

  if (!certificate) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className={classes.modal} open>
        <div className="fullscreen-image">
          <Image src={certificate.image} alt={certificate.title} />
        </div>
      </dialog>
    </>
  );
}
