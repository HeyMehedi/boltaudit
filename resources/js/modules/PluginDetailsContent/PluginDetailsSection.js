import ContentLoading from "@components/ContentLoading";
import { useEffect, useState } from "@wordpress/element";
import { Link } from "react-router-dom";

export default function PluginDetailsSection(plugin) {
  const [dataFetched, setDataFetched] = useState(false);
  const [pluginData, setPluginData] = useState(null);

  useEffect( () => {
      let pluginLoaded = false;
      
			if ( ! plugin.plugin.plugin_page || pluginLoaded ) return;
            
      setPluginData(plugin.plugin.plugin_page);
      setDataFetched(true)
  
      return () => {
        pluginLoaded = true;
      };
    }, [plugin] );

  return (
    <div id="ba-dashboard__plugin_details" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">
        Styles & Scripts
      </h4>
      <p className="ba-dashboard__content__section__desc">
        Get a quick look at your site's style & scripts big it is, how many tables
        it has, and what’s inside.
      </p>
      {dataFetched ? (
        <div className="ba-dashboard__content__section__content">
          <div className="ba-dashboard__content__section__overview">
            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Unconditional
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.enqueued_count || '0'}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Hooks
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.hooks || '0'}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Scripts
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.scripts_count || '0'}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Styles
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.styles_count || "0"}
              </span>
            </div>
          </div>

          <div className="ba-dashboard__content__section__data">
            <table>
              <thead>
                <tr>
                  <th>Handle</th>
                  <th>Src</th>
                  <th>Size</th>
                  <th>Load Time</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(pluginData.styles).map(([key, value]) => (
                  <tr key={key}>
                    <td>{value.handle} {value?.enqueued ? <span className="plugin-badge enqueued">enqueued</span> : null}</td>
                    <td><Link className="plugin-detail-asset" to={value.src} target="_blank" rel="noopener noreferrer">{value.src}</Link></td>
                    <td>{value.size_bytes} bytes</td>
                    <td>{value.load_time_ms}ms</td>
                  </tr>
                ))}
                {Object.entries(pluginData.scripts).map(([key, value]) => (
                  <tr key={key}>
                    <td>{value.handle} {value?.enqueued ? <span className="plugin-badge enqueued">enqueued</span> : null}</td>
                    <td><Link className="plugin-detail-asset" to={value.src} target="_blank" rel="noopener noreferrer">{value.src}</Link></td>
                    <td>{value.size_bytes}</td>
                    <td>{value.load_time_ms}ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>) : (
          <ContentLoading />
        )
      }
    </div>
  )  
}
