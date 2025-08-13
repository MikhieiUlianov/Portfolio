import Section from "@/components/section/section";
import { certificatesItems } from "@/components/SideData";
import classes from "./certificate.module.scss";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function CertificatePage({
  params,
}: {
  params: { slug: string };
}) {
  const certificate = await certificatesItems.find(
    (i) => i.slug === params.slug
  );

  if (!certificate) return notFound();

  const { image, title, description, link, rating, slug } = certificate;

  return (
    <Section sectionClass={classes.certificate}>
      <header>
        <h1>{title}</h1>
        <Link href={`/certificates/${slug}/image`}>
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
    </Section>
  );
}
