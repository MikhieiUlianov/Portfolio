import Section from "@/components/section/section";
import { certificatesItems } from "@/components/SideData";
import classes from "./certificate.module.scss";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function CertificatePage({
  params,
}: {
  params: { slug: string };
}) {
  const certificate = certificatesItems.find((i) => i.slug === params.slug);
  if (certificate) {
    const { image, title, description, link, slug, rating } = certificate;

    return (
      <Section sectionClass={classes.certificate}>
        <header>
          <h1>{title}</h1>
          <Image alt={title} src={image} />
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
  } else {
    notFound();
  }
}
