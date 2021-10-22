import * as React from "react";
import styles from "./TypeWriter.module.css";

type htmlTags = "h1" | "h2" | "h3" | "h4" | "div" | "p" | "span";

interface Props {
  as: htmlTags;
  className: string;
  children: string;
}

interface HtmlTagProps {
  as: keyof JSX.IntrinsicElements;
  className: string;
  children: string;
}

export function TypeWriter({
  as,
  className,
  children,
}: Props): React.ReactElement {
  const HtmlTag: React.FC<HtmlTagProps> = ({
    as: Wrapper,
    children,
    ...rest
  }) => {
    return <Wrapper {...rest}> {children} </Wrapper>;
  };

  return (
    <div className={styles.container}>
      <HtmlTag as={as} className={`${className} ${styles.typedOut}`}>
        {children}
      </HtmlTag>
    </div>
  );
}
