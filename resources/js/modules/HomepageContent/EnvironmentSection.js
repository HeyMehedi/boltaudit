import postData from "@helper/postData";
import { useEffect, useState } from "@wordpress/element";

export default function EnvironmentSection() {
  const [allData, setAllData] = useState({});
  const [activeTab, setActiveTab] = useState(null);

  function flattenOneLevel(obj) {
    const flat = {};
    for (const key in obj) {
      const val = obj[key];
      if (typeof val === "object" && !Array.isArray(val) && val !== null) {
        for (const innerKey in val) {
          flat[innerKey] = val[innerKey];
        }
      } else {
        flat[key] = val;
      }
    }
    return flat;
  }

  useEffect(() => {
    postData("boltaudit/reports/environment").then((res) => {
      // console.log("Environment Data", res);
      setAllData(res);

      // set first tab as active automatically
      const firstKey = Object.keys(res)[0];
      setActiveTab(firstKey);
    });
  }, []);

  const flattenedData = flattenOneLevel(allData[activeTab]);

  return (
    <div
      id="ba-dashboard__environment"
      className="ba-dashboard__content__section"
    >
      <h4 className="ba-dashboard__content__section__title">Environment & Configuration Snapshot</h4>
      <p className="ba-dashboard__content__section__desc">Get a full snapshot of your server and WordPress setup—PHP version, memory limits, upload size, and more. <br/>
        Useful for finding misconfigurations that affect performance or plugin compatibility.
      </p>
      {/* <a
        href="#"
        className="ba-dashboard__content__section__btn ba-dashboard__btn"
      >
        Security analytics documentation
      </a> */}

      <div className="ba-dashboard__content__section__content">
        <div className="ba-dashboard__content__section__data">
          <div className="ba-dashboard__tab">
            <ul className="ba-dashboard__tab__list">
              {Object.keys(allData).map((tabKey) => (
                <li
                  key={tabKey}
                  className={`ba-dashboard__tab__item ${
                    activeTab === tabKey ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {tabKey === "wordpress"
                    ? "WordPress"
                    : tabKey === "php"
                    ? "PHP"
                    : tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                </li>
              ))}
            </ul>

            <div className="ba-dashboard__tab__content">
              <div className="ba-dashboard__tab__content__wrap">
                {Object.entries(flattenedData).map(([key, value]) => (
                  <div key={key} className="ba-dashboard__tab__content__single">
                    <span className="ba-dashboard__tab__content__single__title">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="ba-dashboard__tab__content__single__value">
                      {Array.isArray(value)
                        ? value.join(", ")
                        : value === null
                        ? "null"
                        : typeof value === "boolean"
                        ? value.toString()
                        : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
