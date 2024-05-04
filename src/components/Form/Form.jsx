import "./style.css";
import InputText from "../UI/InputText/InputText";
import InputNum from "../UI/InputNum/InputNum";
import AddButton from "../UI/AddButton/AddButton";
import Result from "../Result/Resilt";

const Form = () => {
  return (
    <div className="form">
      <div className="form__custom">
        <form className="form__item">
          <label htmlFor="value-text" className="form__description">
            Куда было потрачено:
          </label>
          <InputText />
        </form>
        <form className="form__price">
          <label htmlFor="value-number" className="form__description">
            Сколько было потрачено:
          </label>
          <InputNum />
        </form>
        <AddButton />
      </div>
      <Result />
    </div>
  );
};

export default Form;
