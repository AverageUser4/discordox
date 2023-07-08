import css from './Background.module.css';

interface Props {
  children: React.ReactNode,
  color?: number,
}

function Background({ children, color = 3 } : Props) {
  return (
    <div 
      className={css['background']}
      style={{ backgroundColor: `var(--bg-${color})`}}
      data-cy="Background"
    >
      {children}
    </div>
  );
}

export { Background };