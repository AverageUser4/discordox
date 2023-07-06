export function mapFontSize(fontSize: number | null) {
  if(fontSize === null) {
    return 'inherit';
  }

  if(!Number.isInteger(fontSize) || fontSize === 0) {
    return 'var(--font-size-0)';
  } 
  if(fontSize > 0) {
    return `var(--font-size-up-${fontSize})`;
  }

  return `var(--font-size-down-${Math.abs(fontSize)})`;
}