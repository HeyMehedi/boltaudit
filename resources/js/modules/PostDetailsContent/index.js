import ContentLoading from "@components/ContentLoading";
import CountUp from "@components/CountUp";

export default function PostDetailsModule({ data }) {
  if (!data) {
    return <ContentLoading />;
  }

  const registered = Object.entries(data.registered || {});
  const orphan = Object.entries(data.orphaned || {});

  return (
    <>
      <div
        id="ba-dashboard__post_summary"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">Post Summary</h4>
        <p className="ba-dashboard__content__section__desc">
          A quick overview of your site's content footprint including total
          posts, metadata and revisions.
        </p>
        <div className="ba-dashboard__content__section__overview">
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Post Types
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={registered.length} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Total Items
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.total_posts} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Total Meta
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.post_meta_total} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Revisions
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.revisions} />
            </span>
          </div>
        </div>
      </div>

      <div
        id="ba-dashboard__registered_post_types"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Registered Post Types
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Breakdown of all post types currently registered on your site and
          their associated metadata.
        </p>
        <div className="ba-dashboard__content__section__data">
          <table className="ba-dashboard__content__section__data__post">
            <thead>
              <tr>
                <th>Post Type</th>
                <th>Total Items</th>
                <th>Total Meta</th>
              </tr>
            </thead>
            <tbody>
              {registered.map(([type, info]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>
                    <span className="data-wrapper">
                      <span className="data-count">{info.count}</span>
                      <span className="data-progress-wrapper">
                        <span
                          className="data-progress"
                          style={{
                            width: `${
                              (info.percentage)
                            }%`,
                          }}
                        ></span>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="data-wrapper">
                      <span className="data-count">{info.meta}</span>
                      <span className="data-progress-wrapper">
                       <span
                          className="data-progress"
                          style={{
                            width: `${
                              (info.meta_percentage)
                            }%`,
                          }}
                        ></span>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        id="ba-dashboard__orphan_post_types"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Orphaned Post Types
        </h4>
        <p className="ba-dashboard__content__section__desc">
          <strong>Heads up:</strong> The post types listed below appear orphaned — meaning their associated plugin may be deactivated, not necessarily removed. These entries remain in your database, but without a registered post type in use.
        </p>
        <p className="ba-dashboard__content__section__desc">
          <strong>Before cleaning anything up, be absolutely sure</strong> the plugin isn’t just temporarily disabled. Deleting these entries without confirming could result in permanent data loss if the plugin is reactivated later.
        </p>
        <div className="ba-dashboard__content__section__data">
          {orphan.length > 0 ? (
            <table className="ba-dashboard__content__section__data__post">
              <thead>
                <tr>
                  <th>Post Type</th>
                  <th>Total Items</th>
                  <th>Total Meta</th>
                </tr>
              </thead>
              <tbody>
                {orphan.map(([type, info]) => (
                  <tr key={type}>
                    <td>{type}</td>
                    <td>
                      <span className="data-wrapper">
                        <span className="data-count">{info.count}</span>
                        <span className="data-progress-wrapper">
                          <span
                            className="data-progress"
                            style={{
                              width: `${
                                (info.percentage)
                              }%`,
                            }}
                          ></span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="data-wrapper">
                        <span className="data-count">{info.meta}</span>
                        <span className="data-progress-wrapper">
                        <span
                            className="data-progress"
                            style={{
                              width: `${
                                (info.meta_percentage)
                              }%`,
                            }}
                          ></span>
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orphan post types detected.</p>
          )}
        </div>
      </div>
    </>
  );
}
