import ReactSVG from "react-inlinesvg";

// Import Images
import infoIcon from "@icon/info-circled.svg";

export default function QuickInfoSection() {
  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Quick Information
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Server:</span>
            <span className="info-value">
              Self Host
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Memory Limit:</span>
            <span className="info-value">
              512mb
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Max Execution Time:</span>
            <span className="info-value">
              300s
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Plugins:</span>
            <span className="info-value">
              100
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Opcahe:</span>
            <span className="info-value">
              Yes
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">Theme:</span>
            <span className="info-value">
              Astra
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">CDN:</span>
            <span className="info-value">
              No
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="info-title">DNS Setup:</span>
            <span className="info-value">
              Full
              <span className="bs-dashboard-tooltip">
                <ReactSVG src={infoIcon} width={16} height={16} />
                <span className="bs-dashboard-tooltip-content">Tooltip Content</span>
              </span>
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <button className="ba-dashboard__content__sidebar__widget__info__toggle">
              Expand More
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
