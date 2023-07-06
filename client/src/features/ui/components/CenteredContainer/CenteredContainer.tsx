import { setIfDefined } from 'src/utils';
import css from './CenteredContainer.module.css';

interface Props {
  children: React.ReactNode,
  style?: React.CSSProperties,
  marginTop?: number,
  marginBottom?: number,
  maxWidth?: number,
}

function CenteredContainer({ children, style, marginTop, marginBottom, maxWidth } : Props) {
  const styles = { ...style };
  setIfDefined(styles, { marginTop, marginBottom, maxWidth });
  
  return (
    <div 
      className={css['container']}
      style={styles}
    >
      {children}
    </div>
  );
}

export { CenteredContainer };