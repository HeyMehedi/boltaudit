import ContentLoading from "@components/ContentLoading";
import infoIcon from "@icon/info-circled.svg";
import { useEffect, useState } from "@wordpress/element";
import ReactSVG from "react-inlinesvg";

export default function QuickInfoSection(plugin) {
  const [pluginData, setPluginData] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let pluginLoaded = false;

    if (!plugin.plugin.plugin_page || pluginLoaded) return;

    setPluginData(plugin.plugin.plugin_basic);

    return () => {
      pluginLoaded = true;
    };
  }, [plugin]);

  const filteredEntries = pluginData
    ? Object.entries(pluginData).filter(
        ([key, value]) => typeof value !== "boolean"
      )
    : [];

  const visibleEntries = showAll
    ? filteredEntries
    : filteredEntries.slice(0, 4);

  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          Quick Information
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          {pluginData ? (
            visibleEntries.map(([key, value]) => (
              <li
                key={key}
                className="ba-dashboard__content__sidebar__widget__info__item"
              >
                <span className="info-title">
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                  :
                </span>
                <span className="info-value">
                  {value}
                  <span className="bs-dashboard-tooltip">
                    <ReactSVG src={infoIcon} width={16} height={16} />
                    <span className="bs-dashboard-tooltip-content">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                  </span>
                </span>
              </li>
            ))
          ) : (
            <ContentLoading />
          )}

          {filteredEntries.length > 4 && (
            <li className="ba-dashboard__content__sidebar__widget__info__item">
              <button
                className="ba-dashboard__content__sidebar__widget__info__toggle"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show Less" : "Expand More"}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
