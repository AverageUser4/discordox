import css from './InputAndButton.module.css';

interface Props {
  input: React.ReactNode,
  button: React.ReactNode,
  style?: React.CSSProperties,
}

function InputAndButton({ input, button, style = {} } : Props) {
  const styles = { ...style };
  
  return (
    <div 
      className={`${css['container']} button button--kind-0 button--color-0`}
      style={styles}
    >
      {input}
      {button}
    </div>
  );
}

export { InputAndButton };