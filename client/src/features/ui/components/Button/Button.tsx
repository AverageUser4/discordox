import { InteractiveLook, ButtonTypeAttribute } from "src/data/types";
import { mapFontSize } from "src/utils";

interface Props { 
  children: React.ReactNode,
  className?: string,
  look?: InteractiveLook,
  kind?: number,
  colorScheme?: number,
  style?: React.CSSProperties,
  onClick?: Function,
  type?: ButtonTypeAttribute,
  fontSize?: number,
};

function Button({ 
  children,
  className = '',
  look = 'button',
  kind = 0,
  colorScheme = 0,
  style = {},
  onClick = () => 0,
  type,
  fontSize = -1,
} : Props) {
  const classes = `
    ${className}
    ${look}
    ${look}--kind-${kind}
    ${look}--color-${colorScheme}
  `;
  const styles = { ...style };

  if(!styles.fontSize) {
    styles.fontSize = mapFontSize(fontSize);
  }
  
  return (
    <button 
      className={classes}
      style={styles}
      onClick={(event) => onClick(event)}
      type={type}
    >
      {children}
    </button>
  );
}

export { Button };