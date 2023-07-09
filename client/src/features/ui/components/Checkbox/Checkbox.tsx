import css from './Checkbox.module.css';

interface Props {
  isChecked: boolean,
  setIsChecked: Function,
  kind?: number,
  dataCy?: string,
}

function Checkbox({ 
  isChecked,
  setIsChecked,
  kind = 0,
  dataCy = 'Checkbox'
} : Props) {
  return (
    <input
      className={`
        ${css['checkbox']}
        ${css[`checkbox--kind-${kind}`]}
      `}
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked((prev: boolean) => !prev)}
      data-cy={dataCy}
    />
  );
}

export { Checkbox };