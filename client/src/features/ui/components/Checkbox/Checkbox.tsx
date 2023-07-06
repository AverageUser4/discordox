import css from './Checkbox.module.css';

interface Props {
  isChecked: boolean,
  setIsChecked: Function,
}

function Checkbox({ isChecked, setIsChecked } : Props) {
  return (
    <input
      className={css['checkbox']}
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked((prev: boolean) => !prev)}
    />
  );
}

export { Checkbox };