import css from "./Item.module.css";

const Item = ({ image, article, name, weight, children }) => {
  return (
    <div className={css.item}>
      <img src={image} alt="Item image" />
      <p>Назва: {name}</p>
      <p>Артикул: {article}</p>
      <p>Середня вага: {weight}</p>
      <div>{children}</div>
    </div>
  );
};
export default Item;
