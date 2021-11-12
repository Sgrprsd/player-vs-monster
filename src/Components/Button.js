const Button = (props) => {
  return (
    <button
      disabled={props.disabled || false}
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      {props.text}
    </button>
  );
};

export default Button;
