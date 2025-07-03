// Import Images

export default function ActionSection() {
  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Advanced Actions
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <a
              href="#"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Pause Cloudflare
            </a>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <a
              href="#"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Remove from Cloudflare
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
