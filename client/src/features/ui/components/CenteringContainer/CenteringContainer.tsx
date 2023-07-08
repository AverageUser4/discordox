import css from './CenteringContainer.module.css';

interface Props {
  children: React.ReactNode,
}

function CenteringContainer({ children } : Props) {
  return (
    <div 
      className={css['container']}
      data-cy="CenteringContainer"
    >
      {children}
    </div>
  );
}

export { CenteringContainer };