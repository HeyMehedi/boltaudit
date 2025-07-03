export default function SubscriptionSection() {
  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Active Subscriptions
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">registrar:</span>
            <span className="info-value">NameCheap</span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <a
              href="#"
              className="ba-dashboard__content__sidebar__widget__info__link text-body"
            >
              Transfer to Cloudflare
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
