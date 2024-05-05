import "./style.css";

const InputText = (props) => {
  return (
    <input
      value={props.inputValue}
      onChange={(event) => {
        props.setInputValue(event.target.value);
      }}
      type="text"
      placeholder="Куда было потрачено"
      className="form__text"
      id="value-text"
    />
  );
};

export default InputText;
