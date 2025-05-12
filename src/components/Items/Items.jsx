import Item from "../Item/Item"
import css from "./Items.module.css"


const Items = () => {
    return(
        <div className={css.items}>
            <Item/>
        </div>
    )
}
export default Items