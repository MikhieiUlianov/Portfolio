import Section from "@/components/general-use/section";
import { certificatesItems } from "@/components/SideData";
import classes from "./certificate.module.scss";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/UI/Loading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = certificatesItems.find((i) => i.slug === slug);
  return {
    title: certificate?.title || "Project Page",
    description:
      certificate?.description || "My projects page which I worked on.",
  };
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = await certificatesItems.find((i) => i.slug === slug);

  if (!certificate) return notFound();

  const {
    image,
    title,
    description,
    link,
    rating,
    slug: certSlug,
  } = certificate;

  return (
    <Section sectionClass={classes.certificate}>
      <Suspense fallback={<Loading />}>
        <header>
          <h1>{title}</h1>
          <Link href={`/certificates/${certSlug}/image`}>
            <Image alt={title} src={image} />
          </Link>
        </header>
        <div className={classes.content}>
          <p>{description}</p>
          <div>
            My rating: <span>{rating}/5</span>
          </div>
          <div className={classes.link}>
            Find out more <a href={link}>here</a>
          </div>
        </div>
      </Suspense>
    </Section>
  );
}
