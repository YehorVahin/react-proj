import css from "./Item.module.css"

const Item = ({image, article, name, weight}) => {
    return(
        <div className={css.itemcard}>
            <div className={css.cardimage}>
                <img src={image} alt="Item image" />
            </div>
            <div className={css.cardinfo}>
                <p>Назва: {name}</p>
                <p>Артикул: {article}</p>
                <p>Середня вага: {weight}</p>
            </div>
        </div>
    )
}
export default Item