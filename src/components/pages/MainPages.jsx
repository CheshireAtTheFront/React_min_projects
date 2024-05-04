import { useState } from "react";
import BlockTitel from "../BlockTitel/BlockTitel";
import Form from "../Form/Form";
import List from "../List/List";
import ChangesBtn from "../UI/СhangesBtn/СhangesBtn";

function MainPages() {
  const lists = [
    {
      id: 1,
      title: "Магазин “Пятерочка”",
      date: "01.02.2020",
      price: 2021,
      btn: <ChangesBtn />,
    },
    {
      id: 2,
      title: "Магазин “Лента”",
      date: "11.09.2020",
      price: 175,
      btn: <ChangesBtn />,
    },
    {
      id: 3,
      title: "Магазин “Магнит”",
      date: "21.05.2023",
      price: 1569,
      btn: <ChangesBtn />,
    },
  ];

  const [inputValue, setInputValue] = useState([]);

  return (
    <div className="wrapper">
      <BlockTitel />
      <Form inputValue={inputValue} />
      <List lists={lists} setInputValue={setInputValue} />
    </div>
  );
}

export default MainPages;
