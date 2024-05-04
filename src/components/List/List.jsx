import "./style.css";

const List = (props) => {
  return (
    <>
      <div className="list-expenses">
        <ul className="list-expenses__list">
          {props.lists.length <= 0 && <p>Задач нет</p>}
          {props.lists.map((value) => {
            return (
              <li key={value.id} className="list-expenses__item">
                <p className="list-expenses__text">{value.title}</p>
                <p className="list-expenses__date">{value.date}</p>
                <p className="list-expenses__price">{value.price}</p>
                {value.btn}
              </li>
            );
          })}
        </ul>
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
