import ContentLoading from "@components/ContentLoading";
import CountUp from "@components/CountUp";
import postData from "@helper/postData";
import { useEffect, useState } from "@wordpress/element";

export default function DatabaseSection() {
  const [dataFetched, setDataFetched] = useState(false);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    postData("boltaudit/reports/database").then((res) => {
      const data = res;

      setAllData(data);
      setDataFetched(true);
    });
  }, []);

  const largestTables = dataFetched
    ? Object.keys(allData.largest_tables).reduce((acc, key) => {
        acc[key] = {
          tableName: allData.largest_tables[key].table_name || "unnamed",
          rowCount: allData.largest_tables[key].row_count || 0,
          dataSize: allData.largest_tables[key].data_size_formatted || 0,
          indexSize: allData.largest_tables[key].index_size_formatted || 0,
          totalSize: allData.largest_tables[key].total_size_formatted || 0,
        };
        return acc;
      }, {})
    : null;

  return (
    <div id="ba-dashboard__database" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">
        Database Overview
      </h4>
      <p className="ba-dashboard__content__section__desc">
        Get a quick look at your site's database—how big it is, how many tables
        it has, and what’s inside.
        <br />
        Easily find old data, unused tables, or options that might be making
        your site slower.
      </p>
      {/* <a
        href="#"
        className="ba-dashboard__content__section__btn ba-dashboard__btn"
      >
        Security analytics documentation
      </a> */}
      <div className="ba-dashboard__content__section__content">
        {dataFetched ? (
          <div className="ba-dashboard__content__section__overview">
            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                DB Size
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                {allData.db_size}
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Tables
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={allData.total_tables} />
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Empty Tables
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={allData.total_empty_tables} />
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Options
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={allData.options.total_options} />
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Transients
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={allData.options.total_transient} />
              </span>
            </div>

            <div className="ba-dashboard__content__section__overview__single">
              <span className="ba-dashboard__content__section__overview__title">
                Autoloaded Options
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={allData.options.total_autoloaded_options} />
              </span>
            </div>
          </div>
        ) : (
          <ContentLoading />
        )}

        <div className="ba-dashboard__content__section__data">
          {dataFetched ? (
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
                {Object.entries(largestTables).map(([key, value]) => (
                  <tr key={key}>
                    <td>{value.tableName}</td>
                    <td>{value.rowCount}</td>
                    <td>{value.dataSize}</td>
                    <td>{value.indexSize}</td>
                    <td>{value.totalSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <ContentLoading />
          )}
        </div>
      </div>
    </div>
  );
}
