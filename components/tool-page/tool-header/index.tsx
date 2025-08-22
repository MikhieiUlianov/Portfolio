import Image from "next/image";
import classes from "./tool-header.module.scss";

export default function ToolHeader({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
