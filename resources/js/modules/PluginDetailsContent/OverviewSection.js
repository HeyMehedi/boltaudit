import ContentLoading from "@components/ContentLoading";

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
            Plugin
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

              {pluginInfo?.is_active ? (
                  <span className="plugin-badge active">Active</span>
                ) : (
                  <span className="plugin-badge inactive">Inctive</span>
                )}
                {pluginInfo?.needs_upgrade && (
                  <span className="plugin-badge upgrade">Outdated</span>
                )}
                {pluginInfo?.is_abandoned && (
                  <span className="plugin-badge abandoned">
                    Abandoned
                  </span>
                )}
            </div>
          </div>
          <p className="ba-dashboard__content__overview__desc">
            Perform a one-click audit every day to maintain peak performance.
            <br/>
            Proactively identify and resolve issues before they impact your users.
          </p>
        </div>
      </div>
    </>
  );
}
