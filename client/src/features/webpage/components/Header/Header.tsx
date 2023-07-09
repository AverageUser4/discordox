import css from './Header.module.css';
import { Logo, Anchor } from 'src/features/ui';

function Header() {
  return (
    <header 
      className={css['header']}
      data-cy="Header"
    >
      <div className={css['content']}>
        <Logo/>
        <Anchor dataCy="HeaderAnchorLogin" href="/login" look="button">Login</Anchor>
      </div>
    </header>
  );
}

export { Header };