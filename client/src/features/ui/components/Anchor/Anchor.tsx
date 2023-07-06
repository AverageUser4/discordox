import { Link } from "react-router-dom";
import { Look } from "src/data/types";
import { mapFontSize } from "src/utils";

interface Props { 
  children: React.ReactNode,
  href: string,
  className?: string,
  look?: Look,
  kind?: number,
  colorScheme?: number,
  style?: React.CSSProperties,
  fontSize?: number | null,
  isPlainAnchorTag?: boolean,
};

function Anchor({ 
  children,
  href,
  className = '',
  look = 'link',
  kind = 0,
  colorScheme = 0,
  style = {},
  fontSize = null,
  isPlainAnchorTag,
} : Props) {
  const classes = `
    ${className}
    ${look}
    ${look}--kind-${kind}
    ${look}--color-${colorScheme}
  `;
  const styles = { ...style };

  if(fontSize !== null && !styles.fontSize) {
    styles.fontSize = mapFontSize(fontSize);
  }

  const usedProps = { className: classes, style: styles };
  
  if(isPlainAnchorTag) {
    return (
      <a 
        {...usedProps}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      {...usedProps}
      to={href}
    >
      {children}
    </Link>
  );
}

export { Anchor };