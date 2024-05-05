import "./style.css";
import InputText from "../UI/InputText/InputText";
import InputNum from "../UI/InputNum/InputNum";
import AddButton from "../UI/AddButton/AddButton";
import Result from "../Result/Resilt";

const Form = ({
  inputValue,
  setInputValue,
  items,
  setItems,
  inputNum,
  setInputNum,
}) => {
  return (
    <div className="form">
      <form className="form__custom">
        <label htmlFor="value-text" className="form__description">
          Куда было потрачено:
          <InputText inputValue={inputValue} setInputValue={setInputValue} />
        </label>
        <div className="form__price">
          <label htmlFor="value-number" className="form__description">
            Сколько было потрачено:
          </label>
          <InputNum inputNum={inputNum} setInputNum={setInputNum} />
        </div>
        <AddButton
          onAdd={(valueText, valueNum) => {
            setItems([
              {
                valueText,
                valueNum,
              },
              // добавляется каждый элемент массива ...items
              ...items,
            ]);
          }}
          inputValue={inputValue}
          inputNum={inputNum}
        />
      </form>
      <Result />
    </div>
  );
};

export default Form;
