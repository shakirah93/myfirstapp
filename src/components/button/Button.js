import "./Button.css";

function Button(props) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.buttonBackground,
        color: props.buttonColor,
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
