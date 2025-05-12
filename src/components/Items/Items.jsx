import Item from "../Item/Item";
import css from "./Items.module.css";

const Items = ({item}) => {
  return (
    <div className={css.main}>
      <ul className={css.items}>
        {item.map(({ id, image, name, weight, article }) => (
          <li key={id}>
            <Item image={image} name={name} weight={weight} article={article}>
              <button className={css.button_open}>Детальніше</button>
            </Item>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Items;
