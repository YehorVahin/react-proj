import css from "./Header.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Bracelets from "../../pages/Bracelets";
import Chains from "../../pages/Chains";
import Crosses from "../../pages/Crosses";
import Earrings from "../../pages/Earrings";
import Kits from "../../pages/Kits";
import Necklace from "../../pages/Necklace";
import Rings from "../../pages/Rings";
import WedRings from "../../pages/WedRings";
import Home from "../../pages/Home";
import { FaTelegram } from "react-icons/fa";

const Header = () => {
  
    
    return (
      <div className={css.header}>
        <div className={css.container}>
        <h2 className={css.logo}>DoraJewel</h2>
        <nav className={css.nav}>
          <NavLink to="/" className={css.navlink}>
            Головна
          </NavLink>
          <NavLink to="/wedrings" className={css.navlink}>
            Обручки
          </NavLink>
          <NavLink to="/rings" className={css.navlink}>
            Каблучки
          </NavLink>
          <NavLink to="/earrings" className={css.navlink}>
            Сережки
          </NavLink>
          <NavLink to="/bracelets" className={css.navlink}>
            Браслети
          </NavLink>
          <NavLink to="/chains" className={css.navlink}>
            Ланцюжки
          </NavLink>
          <NavLink to="/necklace" className={css.navlink}>
            Кольє
          </NavLink>
          <NavLink to="/crosses" className={css.navlink}>
            Хрестики
          </NavLink>
          <NavLink to="/kits" className={css.navlink}>
            Набори
          </NavLink>
        </nav>
        <div className={css.telegram}>
        <FaTelegram className={css.telegramicon}/>
        <a href="https://t.me/+3j_naYRgY9k5ODgy?fbclid=PAZXh0bgNhZW0CMTEAAafi-YCMvH7l25mebnZKxvPXMA5cVkGhzev647pUeIExPBShGPVOVDlzXcWjbQ_aem_QYHZWu46PRJgoH0NE1VDag" target="blank" className={css.telegramlink}>Телеграм канал</a>
        </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedrings" element={<WedRings />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/crosses" element={<Crosses />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/bracelets" element={<Bracelets />} />
        </Routes>
        
      </div>
    );
  }
  export default Header
