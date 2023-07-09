import { createElement } from "react";
import { Look } from "src/data/types";
import { mapFontSize } from "src/utils";

interface Props {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  element?: string,
  look?: Look,
  colorScheme?: number,
  fontSize?: number,
  fontFamily?: number,
  dataCy?: string,
};

function Text({
  children,
  className = '',
  style = {},
  element = 'span',
  look = 'text',
  colorScheme = 0,
  fontSize,
  fontFamily = 0,
  dataCy = 'Text',
} : Props) {
  const classes = `
    ${className}
    ${look}
    ${look}--color-${colorScheme}
  `;
  const styles = { ...style };

  if(!styles.fontSize) {
    styles.fontSize = mapFontSize(fontSize);
  }
  if(!styles.fontFamily) {
    styles.fontFamily = `var(--font-family-${fontFamily})`;
  }
  
  return (
    createElement(element, { style: styles, className: classes, "data-cy": dataCy }, children)
  );
}

export { Text };