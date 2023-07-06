import { Look } from "src/data/types";
import { mapFontSize } from "src/utils";

interface Props { 
  value: any,
  setValue: Function,
  className?: string,
  look?: Look,
  kind?: number,
  colorScheme?: number,
  style?: React.CSSProperties,
  type?: React.HTMLInputTypeAttribute,
  fontSize?: number | null,
  placeholder?: string,
};

function Input({ 
  value,
  setValue,
  className = '',
  look = 'input',
  kind = 0,
  colorScheme = 0,
  style = {},
  type = 'text',
  fontSize = null,
  placeholder = '',
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
  
  return (
    <input 
      className={classes}
      style={styles}
      type={type}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }}
      placeholder={placeholder}
    />
  );
}

export { Input };