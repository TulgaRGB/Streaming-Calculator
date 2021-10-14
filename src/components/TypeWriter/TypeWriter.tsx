import * as React from 'react';
import styles from './TypeWriter.module.css'

type htmlTags =  'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span' ;

interface Props {
  as: htmlTags;
  style: React.CSSProperties;
  children: React.ReactElement;
}

export function TypeWriter({as, style, children}: Props): React.ReactElement {

  const HtmlTag = `${as}`;

  return (
      <div className={styles.container}>
        <HtmlTag className={`${style} ${styles.typedOut}`}>
          {children}
        </HtmlTag>
      </div>
  )
}
