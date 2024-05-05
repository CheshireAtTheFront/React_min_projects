import "./style.css";

const InputNum = (props) => {
  return (
    <input
      value={props.inputNum}
      onChange={(event) => {
        props.setInputNum(event.target.value);
      }}
      type="number"
      placeholder="Сколько было потрачено"
      className="form__number"
      id="value-number"
    />
  );
};

export default InputNum;
