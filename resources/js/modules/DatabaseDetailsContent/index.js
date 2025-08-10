import ContentLoading from "@components/ContentLoading";
import CountUp from "@components/CountUp";

const formatBytes = (bytes) => {
  if (!bytes) {
    return "0 B";
  }
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"]; 
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export default function DatabaseDetailsModule({ data }) {
  if (!data) {
    return <ContentLoading />;
  }

  const tables = [...(data.tables || [])]
    .filter((t) => parseInt(t.row_count, 10) > 0)
    .sort((a, b) => b.total_size - a.total_size);
  const emptyTables = data.empty_tables || [];
  const heavyOptions = data.heavy_autoloaded || [];
  const indexStats = data.index_efficiency || [];

  return (
    <>
      <div
        id="ba-dashboard__database_summary"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Database Summary
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Snapshot of your database health including size, table counts and
          option usage.
        </p>
        <div className="ba-dashboard__content__section__overview">
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              DB Size
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              {data.db_size}
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Tables
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.total_tables} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Empty Tables
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.total_empty_tables} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Options
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.options.total_options} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Transients
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.options.total_transient} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Autoloaded Options
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.options.total_autoloaded_options} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Expired Transients
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={data.options.total_expired_transients} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Autoloaded Data Size
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              {formatBytes(data.options.total_autoloaded_size)}
            </span>
          </div>
        </div>
      </div>

      <div
        id="ba-dashboard__database_tables"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Tables by Size
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Every table ordered from largest to smallest to spot storage hogs.
        </p>
        <div className="ba-dashboard__content__section__data">
          <table>
            <thead>
              <tr>
                <th>Table Name</th>
                <th>Rows</th>
                <th>Data Size</th>
                <th>Index Size</th>
                <th>Total Size</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table) => (
                <tr key={table.table_name}>
                  <td>{table.table_name}</td>
                  <td>{table.row_count}</td>
                  <td>{table.data_size_formatted}</td>
                  <td>{table.index_size_formatted}</td>
                  <td>{table.total_size_formatted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        id="ba-dashboard__database_empty_tables"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Empty Tables
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Tables with no rows that may be removed or optimized.
        </p>
        <div className="ba-dashboard__content__section__data">
          {emptyTables.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Table Name</th>
                  <th>Engine</th>
                </tr>
              </thead>
              <tbody>
                {emptyTables.map((table) => (
                  <tr key={table.table_name}>
                    <td>{table.table_name}</td>
                    <td>{table.ENGINE || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No empty tables found.</p>
          )}
        </div>
      </div>

      <div
        id="ba-dashboard__database_autoloaded_options"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Largest Autoloaded Options
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Autoloaded options consuming the most space, loaded on every request.
        </p>
        <div className="ba-dashboard__content__section__data">
          {heavyOptions.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Option Name</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {heavyOptions.map((opt) => (
                  <tr key={opt.option_name}>
                    <td>{opt.option_name}</td>
                    <td>{formatBytes(opt.size)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No autoloaded options detected.</p>
          )}
        </div>
      </div>

      <div
        id="ba-dashboard__database_index_efficiency"
        className="ba-dashboard__content__section"
      >
        <h4 className="ba-dashboard__content__section__title">
          Index Efficiency
        </h4>
        <p className="ba-dashboard__content__section__desc">
          Highlights tables where indexes take up large space relative to data.
        </p>
        <div className="ba-dashboard__content__section__data">
          {indexStats.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Table</th>
                  <th>Data Size</th>
                  <th>Index Size</th>
                  <th>Index %</th>
                </tr>
              </thead>
              <tbody>
                {indexStats.map((stat) => (
                  <tr key={stat.table}>
                    <td>{stat.table}</td>
                    <td>{formatBytes(stat.data_size)}</td>
                    <td>{formatBytes(stat.index_size)}</td>
                    <td>{stat.index_ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No index statistics available.</p>
          )}
        </div>
      </div>
    </>
  );
}
