import { createElement } from "react";
import { TextLook } from "src/data/types";
import { mapFontSize } from "src/utils";

interface Props {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  element?: string,
  look?: TextLook,
  colorScheme?: number,
  fontSize?: number,
};

function Text({
  children,
  className = '',
  style = {},
  element = 'span',
  look = 'text',
  colorScheme = 0,
  fontSize = 0,
} : Props) {
  const classes = `
    ${className}
    ${look}
    ${look}--color-${colorScheme}
  `;
  const styles = { ...style };

  if(fontSize && !styles.fontSize) {
    styles.fontSize = mapFontSize(fontSize);
  }
  
  return (
    createElement(element, { style: styles, className: classes }, children)
  );
}

export { Text };