import css from './ArtworkContainer.module.css';

interface Props {
  children: React.ReactNode,
  kind?: number,
}

function ArtworkContainer({ children, kind = 0 } : Props) {
  return (
    <div 
      className={`
        ${css['container']}
        ${css[`container--kind-${kind}`]}
      `}
      data-cy="ArtworkContainer"
    >
      {children}
    </div>
  );
}

export { ArtworkContainer };