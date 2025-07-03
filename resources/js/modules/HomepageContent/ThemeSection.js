import CountUp from "@components/CountUp";
import ReactSVG from "react-inlinesvg";

// Import Images
import arrowRightIcon from "@icon/arrow-right.svg";
import infoIcon from "@icon/info-circled.svg";

export default function ThemeSection() {
  return (
    <div id="ba-dashboard__theme" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">Themes</h4>

      <p className="ba-dashboard__content__section__desc">
        Review HTTP/S requests processed by Cloudfare to assess theats and tune
        configurations.
      </p>
      <a
        href="#"
        className="ba-dashboard__content__section__btn ba-dashboard__btn"
      >
        Security analytics documentation
      </a>
      <div className="ba-dashboard__content__section__content">
        <div className="ba-dashboard__content__section__overview">
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Total
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={6.67} float={true} />K
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Types
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={7.92} float={true} />K
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Meta
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={7.57} float={true} />K
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">
              Revisions
            </span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={7.84} float={true} />K
            </span>
          </div>
        </div>
        <div className="ba-dashboard__content__section__data">
          <table>
            <thead>
              <tr>
                <th>
                  Name
                  <span className="bs-dashboard-tooltip">
                    <ReactSVG src={infoIcon} width={16} height={16} />
                    <span className="bs-dashboard-tooltip-content">
                      Plugin Name
                    </span>
                  </span>
                </th>
                <th>
                  Action
                  <span className="bs-dashboard-tooltip">
                    <ReactSVG src={infoIcon} width={16} height={16} />
                    <span className="bs-dashboard-tooltip-content">
                      Plugin Action
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elementor</td>
                <td>
                  <a href="#">
                    Check
                    <ReactSVG src={arrowRightIcon} width={16} height={16} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>WooCommerch</td>
                <td>
                  <a href="#">
                    Check
                    <ReactSVG src={arrowRightIcon} width={16} height={16} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>JetPack</td>
                <td>
                  <a href="#">
                    Check
                    <ReactSVG src={arrowRightIcon} width={16} height={16} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Funnel Kit</td>
                <td>
                  <a href="#">
                    Check
                    <ReactSVG src={arrowRightIcon} width={16} height={16} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>WP Rocket</td>
                <td>
                  <a href="#">
                    Check
                    <ReactSVG src={arrowRightIcon} width={16} height={16} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
