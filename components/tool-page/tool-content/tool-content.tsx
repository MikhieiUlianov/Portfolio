import Image from "next/image";

import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

import ToolHeader from "../tool-header/tool-header";
import classes from "./tool-content.module.scss";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("jsx", jsx);

type ToolContentProps = {
  img: any;
  title: string;
  content: string;
};

export default function ToolContent({ img, title, content }: ToolContentProps) {
  const imagePath = `/icons/coding/${img}`;
  const customRenderers: Components = {
    p({ node, children }) {
      if (
        node &&
        node.children &&
        node.children[0]?.type === "element" &&
        node.children[0].tagName === "img"
      ) {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/icons/coding/${image.properties.src}`}
              alt={String(image.properties.alt)}
            />
          </div>
        );
      } else {
        return <p>{children}</p>;
      }
    },

    code({ className, children }) {
      const language = className?.split("-")[1] || "text";
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {String(children).trim()}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <ToolHeader image={imagePath} title={title} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}
