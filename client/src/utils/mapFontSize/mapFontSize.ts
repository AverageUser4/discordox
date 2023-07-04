export function mapFontSize(fontSize: number) {
  if(!Number.isInteger(fontSize) || fontSize === 0) {
    return 'var(--font-size-0)';
  } else if(fontSize > 0) {
    return `var(--font-size-up-${fontSize})`;
  } else {
    return `var(--font-size-down-${Math.abs(fontSize)})`;
  }
}