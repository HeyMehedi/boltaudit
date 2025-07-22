import ContentLoading from "@components/ContentLoading";
import CountUp from "@components/CountUp";
import postData from "@helper/postData";
import { useEffect, useState } from "@wordpress/element";

export default function WoocommerceSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    postData("boltaudit/reports/woocommerce").then((res) => {
      setData(res);
    });
  }, []);

  if (!data) {
    return <ContentLoading />;
  }

  const summary = data.summary || {};
  const insights = data.insights || {};

  const rows = [
    {
      label: "Cart Fragments Sitewide",
      value: insights.cart_fragments_sitewide ? "❌" : "✅",
    },
    {
      label: "Woo Styles/JS on All Pages",
      value: insights.styles_js_global ? "❌" : "✅",
    },
    {
      label: "High Product Variation Count",
      value: insights.high_variation_count ? "⚠️" : "✅",
    },
    {
      label: "Outdated Woo Templates",
      value:
        insights.outdated_templates && insights.outdated_templates.length > 0
          ? "⚠️"
          : "✅",
    },
    {
      label: "Scheduled Actions",
      value: insights.scheduled_actions,
    },
    {
      label: "Unused Product Tags",
      value:
        insights.unused_product_tags > 0
          ? `${insights.unused_product_tags} ⚠️`
          : "✅",
    },
    {
      label: "Transients (wc_*)",
      value:
        insights.wc_transients > 0
          ? `${insights.wc_transients} ⚠️`
          : "✅",
    },
  ];

  return (
    <div id="ba-dashboard__woocommerce" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">
        WooCommerce Performance Insights
      </h4>
      <div className="ba-dashboard__content__section__content">
        <div className="ba-dashboard__content__section__overview equal-height">
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Products</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.products || 0} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Variations</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.variations || 0} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Orders</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.orders || 0} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Coupons</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.coupons || 0} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Categories</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.categories || 0} />
            </span>
          </div>
          <div className="ba-dashboard__content__section__overview__single">
            <span className="ba-dashboard__content__section__overview__title">Attributes/Terms</span>
            <span className="ba-dashboard__content__section__overview__count">
              <CountUp target={summary.attribute_terms || 0} />
            </span>
          </div>
        </div>
        <div className="ba-dashboard__content__section__data">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
