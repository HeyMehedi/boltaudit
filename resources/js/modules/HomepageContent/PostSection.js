import ContentLoading from "@components/ContentLoading";
import CountUp from "@components/CountUp";
import postData from "@helper/postData";
import ReactSVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "@wordpress/element";

import arrowRightIcon from "@icon/arrow-right.svg";

export default function PostSection() {
  const [dataFetched, setDataFetched] = useState(false);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    postData("boltaudit/reports/posts").then((res) => {
      const data = res;
      // console.log("Post Data", { data });

      setAllData(data);
      setDataFetched(true);
    });
  }, []);

  const postType = dataFetched
    ? Object.keys(allData.post_types).reduce((acc, key) => {
        acc[key] = {
          totalType: allData.total_posts || 0,
          countType: allData.post_types[key] || 0,
          totalMeta: allData.post_meta_total || 0,
          countMeta: allData.post_meta_by_type[key] || 0,
        };
        return acc;
      }, {})
    : null;

  return dataFetched ? (
    <div id="ba-dashboard__post" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">Post Type & Metadata Overview</h4>
      <p className="ba-dashboard__content__section__desc">
        See how many posts, pages, and custom content types your site has—plus how much metadata is attached.<br/>
        Quickly spot unused or bloated content types that may be slowing things down.
      </p>
      <Link
        to="/posts"
        className="ba-dashboard__content__overview__btn ba-dashboard__btn"
      >
        <span className="bs-dashboard-tooltip">
          Open Detailed Report{" "}
          <ReactSVG src={arrowRightIcon} width={16} height={16} />
        </span>
      </Link>
      <div className="ba-dashboard__content__section__content">
        <div className="ba-dashboard__content__section__overview">
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Post Types
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={Object.keys(allData.post_types).length - 1} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Total Items
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={allData.total_posts} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Total Meta
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={allData.post_meta_total} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Revisions
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={allData.revisions} />
            </span>
          </div>
        </div>
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
              {Object.entries(postType).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    <span className="data-wrapper">
                      <span className="data-count">{value.countType}</span>
                      <span className="data-progress-wrapper">
                        <span
                          className="data-progress"
                          style={{
                            width: `${
                              (value.countType * 100) / value.totalType
                            }%`,
                          }}
                        ></span>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="data-wrapper">
                      <span className="data-count">{value.countMeta}</span>
                      <span className="data-progress-wrapper">
                        <span
                          className="data-progress"
                          style={{
                            width: `${
                              (value.countMeta * 100) / value.totalMeta
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
    </div>
  ) : (
    <ContentLoading />
  );
}
