import { lazy, useState } from "@wordpress/element";
import ReactSVG from "react-inlinesvg";

const ChartRow = lazy(() => import("@components/ChartRow"));

// Import Images
import checkIcon from "@icon/check.svg";

// Sample data by time range
const sampleData = {
  "24hours": {
    visitors: [10, 30, 45, 70, 50, 65, 60, 80, 50, 40, 30, 70],
    requests: [20, 50, 40, 100, 60, 40, 50, 70, 60, 45, 35, 25],
    cached: Array(12).fill(0),
    saved: [5, 20, 35, 50, 30, 60, 45, 70, 50, 30, 20, 40],
    summary: {
      visitors: 313,
      requests: "1.5K",
      cached: "0%",
      saved: "35 MB",
    },
  },
  "7days": {
    visitors: [100, 150, 130, 120, 180, 160, 140],
    requests: [300, 400, 350, 370, 420, 390, 310],
    cached: Array(7).fill(0),
    saved: [120, 180, 160, 200, 190, 170, 150],
    summary: {
      visitors: 1023,
      requests: "7.2K",
      cached: "0%",
      saved: "210 MB",
    },
  },
  "30days": {
    visitors: Array(30)
      .fill()
      .map(() => Math.floor(Math.random() * 200)),
    requests: Array(30)
      .fill()
      .map(() => Math.floor(Math.random() * 500)),
    cached: Array(30).fill(0),
    saved: Array(30)
      .fill()
      .map(() => Math.floor(Math.random() * 100)),
    summary: {
      visitors: 7431,
      requests: "29.3K",
      cached: "0%",
      saved: "1.2 GB",
    },
  },
};

function getDateRange(tabKey) {
  const today = new Date();
  let startDate = new Date();

  if (tabKey === "24hours") {
    startDate.setDate(today.getDate() - 1);
  } else if (tabKey === "7days") {
    startDate.setDate(today.getDate() - 6); // today + 6 days = 7 total
  } else if (tabKey === "30days") {
    startDate.setDate(today.getDate() - 29); // today + 29 = 30 total
  }

  const format = (date) =>
    date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });

  return `${format(startDate)} - ${format(today)}`;
}

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState("24hours");
  const chartData = sampleData[activeTab];

  function handleTab(item) {
    setActiveTab(item);
  }

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
            <h3 className="ba-dashboard__content__overview__title">
              heymehedi.com
            </h3>
            <div className="ba-dashboard__content__overview__badge">
              <span className="ba-dashboard__content__overview__badge__single active">
                <ReactSVG src={checkIcon} width={16} height={16} />
                Active
              </span>
              <span className="ba-dashboard__content__overview__badge__single">
                Star
              </span>
              <span className="ba-dashboard__content__overview__badge__single">
                Free plan
              </span>
            </div>
          </div>
          <p className="ba-dashboard__content__overview__desc">
            Monitor security and performance for heymehedi.com. Configure
            products and services from the menu.
          </p>
          <a
            href="#"
            className="ba-dashboard__content__overview__btn ba-dashboard__btn"
          >
            Review BottAudit Fundamentals
          </a>
        </div>
        {/* <div className="ba-dashboard__content__overview__analysis">
          <div className="ba-dashboard__tab">
            <div className="ba-dashboard__tab__top">
              <ul className="ba-dashboard__tab__list">
                <li
                  className={`ba-dashboard__tab__item ${
                    activeTab === "24hours" ? "active" : ""
                  }`}
                  onClick={() => handleTab("24hours")}
                >
                  24 Hours
                </li>
                <li
                  className={`ba-dashboard__tab__item ${
                    activeTab === "7days" ? "active" : ""
                  }`}
                  onClick={() => handleTab("7days")}
                >
                  7 Days
                </li>
                <li
                  className={`ba-dashboard__tab__item ${
                    activeTab === "30days" ? "active" : ""
                  }`}
                  onClick={() => handleTab("30days")}
                >
                  30 Days
                </li>
              </ul>
              <div className="ba-dashboard__toolbar">
                {getDateRange(activeTab)}
              </div>
            </div>
            <div className="ba-dashboard__tab__content">
              <Suspense fallback={<ContentLoading />}>
                <ChartRow
                  title="Unique Visitors"
                  value={chartData.summary.visitors}
                  data={chartData.visitors}
                />
                <ChartRow
                  title="Total Request"
                  value={chartData.summary.requests}
                  data={chartData.requests}
                />
                <ChartRow
                  title="Percent Cached"
                  value={chartData.summary.cached}
                  data={chartData.cached}
                />
                <ChartRow
                  title="Total Data Served"
                  value={chartData.summary.saved}
                  data={chartData.saved}
                />
              </Suspense>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
