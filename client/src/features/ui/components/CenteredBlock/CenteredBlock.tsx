import { setIfDefined } from 'src/utils';
import css from './CenteredBlock.module.css';

interface Props {
  children: React.ReactNode,
  style?: React.CSSProperties,
  marginTop?: number,
  marginBottom?: number,
  maxWidth?: number,
  dataCy?: string,
}

function CenteredBlock({ children, style, marginTop, marginBottom, maxWidth, dataCy = 'CenteredBlock' } : Props) {
  const styles = { ...style };
  setIfDefined(styles, { marginTop, marginBottom, maxWidth });
  
  return (
    <div 
      className={css['container']}
      style={styles}
      data-cy={dataCy}
    >
      {children}
    </div>
  );
}

export { CenteredBlock };