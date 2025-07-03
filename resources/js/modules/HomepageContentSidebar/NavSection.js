import ReactSVG from "react-inlinesvg";

import { NavLink } from "react-router-dom";

// Import Images
import plusIcon from "@icon/plus.svg";

export default function NavSection() {
  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Switch Page
        </h4>
        <button className="ba-dashboard__content__sidebar__widget__single__add">
          <ReactSVG src={plusIcon} width={20} height={20} />
        </button>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <NavLink
              activeclassname="active"
              to="/shop"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Shop
            </NavLink>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <NavLink
              activeclassname="active"
              to="/cart"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Cart
            </NavLink>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <NavLink
              activeclassname="active"
              to="/checkout"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Checkout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
