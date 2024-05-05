import "./style.css";

const AddButton = ({ onAdd, inputValue, inputNum }) => {
  return (
    <button
      type="button"
      className="form__btn"
      onClick={() => {
        onAdd(inputValue, inputNum);
      }}
    >
      Добавить
    </button>
  );
};

export default AddButton;
