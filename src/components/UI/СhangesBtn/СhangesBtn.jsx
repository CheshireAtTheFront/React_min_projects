import "./style.css";

const ChangesBtn = () => {
  return (
    <div className="block-btn">
      <button type="button" className="block-btn__btn btn-change">
        <img
          src="./image/img/pen.svg"
          className="block-btn__icon"
          alt="ручка"
        />
      </button>
      <button type="button" className="block-btn__btn btn-remove">
        <img
          src="./image/img/delete.svg"
          className="block-btn__icon"
          alt="корзина"
        />
      </button>
    </div>
  );
};

export default ChangesBtn;
