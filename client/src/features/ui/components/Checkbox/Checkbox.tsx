import css from './Checkbox.module.css';

interface Props {
  isChecked: boolean,
  setIsChecked: Function,
  kind?: number,
}

function Checkbox({ isChecked, setIsChecked, kind = 0 } : Props) {
  return (
    <input
      className={`
        ${css['checkbox']}
        ${css[`checkbox--kind-${kind}`]}
      `}
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked((prev: boolean) => !prev)}
    />
  );
}

export { Checkbox };