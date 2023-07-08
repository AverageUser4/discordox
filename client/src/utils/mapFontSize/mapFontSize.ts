export function mapFontSize(fontSize: number | undefined) {
  if(typeof fontSize !== 'number') {
    return 'inherit';
  }

  if(fontSize === 0) {
    return 'var(--font-size-0)';
  } 
  if(fontSize > 0) {
    return `var(--font-size-up-${fontSize})`;
  }

  return `var(--font-size-down-${Math.abs(fontSize)})`;
}