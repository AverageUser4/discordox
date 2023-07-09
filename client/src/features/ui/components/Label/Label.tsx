import { Look } from "src/data/types";

interface Props { 
  children: React.ReactNode,
  className?: string,
  look?: Look,
  kind?: number,
  colorScheme?: number,
  style?: React.CSSProperties,
  dataCy?: string,
};

function Label({ 
  children,
  className = '',
  look = 'label',
  kind = 0,
  colorScheme = 0,
  style = {},
  dataCy = 'Label'
} : Props) {
  const classes = `
    ${className}
    ${look}
    ${look}--kind-${kind}
    ${look}--color-${colorScheme}
  `;
  const styles = { ...style };

  return (
    <label 
      className={classes}
      style={styles}
      data-cy={dataCy}
    >
      {children}
    </label>
  );
}

export { Label };