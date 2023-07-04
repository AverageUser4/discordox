import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from 'src/assets/icons/logo-with-text.svg';

function Logo() {
  return (
    <Link className={css['container']} to="/">
      <LogoSVG/>
    </Link>
  );
}

export { Logo };