import { Logo } from '../..';
import css from './FloatingCard.module.css';

interface Props {
  children: React.ReactNode,
  hasLogo?: boolean,
}

function FloatingCard({ children, hasLogo = true } : Props) {
  return (
    <div 
      className={css['container']}
      data-cy="FloatingCard"
    >
      {hasLogo && <Logo className={css['logo']}/>}
      {children}
    </div>
  );
}

export { FloatingCard };