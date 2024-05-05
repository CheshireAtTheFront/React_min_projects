import "./style.css";
import ChangesBtn from "../UI/СhangesBtn/СhangesBtn";

// export const generateId = () =>
//   Math.random().toString(16).slice(2) + new Date().getTime().toString(36);

const List = ({ items }) => {
  const elem = items.map((value) => {
    return (
      <li key={Math.random()} className="list-expenses__item">
        <div className="list-expenses item">
          <p className="list-expenses__text">{value.title}</p>
          <p className="list-expenses__date">date</p>
          <p className="list-expenses__price">{value.num} р.</p>
        </div>
        <ChangesBtn />
      </li>
    );
  });

  return (
    <>
      <div className="list-expenses">
        <ol className="list-expenses__list">
          {items.length <= 0 && <p>Задач нет</p>}
          {elem}
        </ol>
      </div>
    </>
  );
};
export default List;

{
  /* <li className="list-expenses__item">
    <p className="list-expenses__text">1) Магазин “Пятерочка”</p>
    <p className="list-expenses__date">01.02.2020</p>
    <p className="list-expenses__price">2020р.</p>
    <div className="block-btn">
      <button type="button" className="block-btn__btn btn-change">
        <img src={pen} className="block-btn__icon" alt="ручка" />
      </button>
      <button type="button" className="block-btn__btn btn-remove">
        <img src={basket} className="block-btn__icon" alt="корзина" />
      </button>
    </div>
  </li>
  <li className="list-expenses__item">
    {/* {items.map(item => {
      <Input item={item} key={item.id}/>
    })} */
}
//   <p className="list-expenses__text">2) Магазин “Магнит”</p>
//   <p className="list-expenses__date">12.07.2019</p>
//   <p className="list-expenses__price">175р.</p>
//   <div className="block-btn">
//     <button type="button" className="block-btn__btn btn-change">
//       <img src={pen} className="block-btn__icon" alt="ручка" />
//     </button>
//     <button type="button" className="block-btn__btn btn-remove">
//       <img src={basket} className="block-btn__icon" alt="корзина" />
//     </button>
//   </div>
// </li>
// <li className="list-expenses__item">
{
  /* {items.map(item => {
      <Input item={item} key={item.id}/>
    })} */
}
//   <p className="list-expenses__text">3) Магазин “Лента”</p>
//   <p className="list-expenses__date">19.04.2020</p>
//   <p className="list-expenses__price">5689р.</p>
//   <div className="block-btn">
//     <button type="button" className="block-btn__btn btn-change">
//       <img src={pen} className="block-btn__icon" alt="ручка" />
//     </button>
//     <button type="button" className="block-btn__btn btn-remove">
//       <img src={basket} className="block-btn__icon" alt="корзина" />
//     </button>
//   </div>
// </li>
