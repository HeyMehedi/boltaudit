import ReactSVG from "react-inlinesvg";
import ContentLoading from "@components/ContentLoading";

// Import Images
import checkIcon from "@icon/check.svg";

export default function OverviewSection(plugin) {
  const pluginInfo = plugin.plugin.plugin_basic;

  return (
    <>
      <div
        id="ba-dashboard__overview"
        className="ba-dashboard__content__overview"
      >
        <div className="ba-dashboard__content__overview__top">
          <span className="ba-dashboard__content__overview__subtitle">
            Overview
          </span>
          <div className="ba-dashboard__content__overview__intro">
            {
              pluginInfo ?
              <h3 className="ba-dashboard__content__overview__title">
                {pluginInfo?.name}
              </h3> :
              <ContentLoading type="single" style={{ minHeight: "35px" }} />
            }
            <div className="ba-dashboard__content__overview__badge">
              {pluginInfo?.is_active ? 
                <span className="ba-dashboard__content__overview__badge__single active">
                  <ReactSVG src={checkIcon} width={16} height={16} />
                  Active
                </span> : null
              }
              {pluginInfo?.is_abandoned ? 
                <span className="ba-dashboard__content__overview__badge__single active">
                  <ReactSVG src={checkIcon} width={16} height={16} />
                  Abandoned
                </span> : null
              }

            </div>
          </div>
          <p className="ba-dashboard__content__overview__desc">
            Perform a one-click audit every day to maintain peak performance and
            security. <br />
            Integrate this plugin into your routine to proactively identify and
            resolve issues before they impact your users.
          </p>
        </div>
      </div>
    </>
  );
}
