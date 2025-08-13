import { notFound } from "next/navigation";
import { certificatesItems } from "@/components/SideData";
import ModalBackdrop from "@/components/modal-backdrop";
import Image from "next/image";
import classes from "./modal.module.scss";
<ModalBackdrop />;

export default async function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const certificate = await certificatesItems.find(
    (i) => i.slug === params.slug
  );

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
