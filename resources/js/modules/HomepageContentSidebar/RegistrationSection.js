export default function RegistrationSection() {
  return (
    <div className="ba-dashboard__content__sidebar__widget__single ba-dashboard__content__sidebar__widget__single--registration">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Domain Registration
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Billing</span>
            <span className="info-value">Next bill: 07 June 2025</span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Billing</span>
            <a
              href="#"
              className="ba-dashboard__btn ba-dashboard__btn--primary"
            >
              Change
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
