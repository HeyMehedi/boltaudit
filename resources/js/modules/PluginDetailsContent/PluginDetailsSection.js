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
    <div id="ba-dashboard__assets" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">
        Assets
      </h4>
      <p className="ba-dashboard__content__section__desc">
        Get a clear picture of how many scripts and styles are unconditionally registered and enqueued — and how they might be hurting your site's performance.
      </p>
      {dataFetched ? (
        <div className="ba-dashboard__content__section__content">
          <div className="ba-dashboard__content__section__overview">
            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Unconditional Enqueued
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.enqueued_count || '0'}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Scripts Registered
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {pluginData.scripts_count || '0'}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Styles Registered
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
                {pluginData.styles.length === 0 && pluginData.scripts.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
                      No unconditional scripts or styles registered for this plugin.
                    </td>
                  </tr>
                ) : (
                  <>
                    {pluginData.styles.map((value, key) => (
                      <tr key={`style-${key}`}>
                        <td>
                          {value.handle}
                          {value?.enqueued && <span className="plugin-badge enqueued">enqueued</span>}
                        </td>
                        <td>
                          <Link className="plugin-detail-asset" to={value.src} target="_blank" rel="noopener noreferrer">
                            {value.src}
                          </Link>
                        </td>
                        <td>{(value.size_kb)?.toFixed(2)} kb</td>
                        <td>{(value.load_time_ms)?.toFixed(2)} ms</td>
                      </tr>
                    ))}

                    {pluginData.scripts.map((value, key) => (
                      <tr key={`script-${key}`}>
                        <td>
                          {value.handle}
                          {value?.enqueued && <span className="plugin-badge enqueued">enqueued</span>}
                        </td>
                        <td>
                          <Link className="plugin-detail-asset" to={value.src} target="_blank" rel="noopener noreferrer">
                            {value.src}
                          </Link>
                        </td>
                        <td>{(value.size_kb)?.toFixed(2)} kb</td>
                        <td>{(value.load_time_ms)?.toFixed(2)} ms</td>
                      </tr>
                    ))}
                  </>
                )}
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
