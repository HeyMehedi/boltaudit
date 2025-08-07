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
      <div className="ba-dashboard__content__section">
        <h4 className="ba-dashboard__content__section__title">Post Summary</h4>
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

      <div className="ba-dashboard__content__section">
        <h4 className="ba-dashboard__content__section__title">Registered Post Types</h4>
        <div className="ba-dashboard__content__section__data">
          <table>
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
                  <td>{info.count}</td>
                  <td>{info.meta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ba-dashboard__content__section">
        <h4 className="ba-dashboard__content__section__title">Orphaned Post Types</h4>
        <div className="ba-dashboard__content__section__data">
          {orphan.length > 0 ? (
            <table>
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
                    <td>{info.count}</td>
                    <td>{info.meta}</td>
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
