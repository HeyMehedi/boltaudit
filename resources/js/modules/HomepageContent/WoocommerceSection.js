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
      description:
        "Detects if wc-ajax=get_refreshed_fragments loads on every page, which hurts caching.",
      value: insights.cart_fragments_sitewide ? "❌" : "✅",
    },
    {
      label: "Woo Styles/JS on All Pages",
      description:
        "Checks if WooCommerce scripts and styles are enqueued globally.",
      value: insights.styles_js_global ? "❌" : "✅",
    },
    {
      label: "High Product Variation Count",
      description: "Warns when product variations exceed 2,000.",
      value: insights.high_variation_count ? "⚠️" : "✅",
    },
    {
      label: "Outdated Woo Templates",
      description: "Theme overrides of WooCommerce templates that are outdated.",
      value:
        insights.outdated_templates && insights.outdated_templates.length > 0
          ? "⚠️"
          : "✅",
    },
    {
      label: "Scheduled Actions",
      description: "Number of pending actions in ActionScheduler.",
      value: insights.scheduled_actions,
    },
    {
      label: "Unused Product Tags",
      description: "Tags without any products attached.",
      value:
        insights.unused_product_tags > 0
          ? `${insights.unused_product_tags} ⚠️`
          : "✅",
    },
    {
      label: "Transients (wc_*)",
      description: "Count of WooCommerce transients in wp_options.",
      value:
        insights.wc_transients > 0
          ? `${insights.wc_transients} ⚠️`
          : "✅",
    },
    {
      label: "HPOS Enabled",
      description:
        "Indicates if High Performance Order Storage feature is active.",
      value: insights.hpos_enabled ? "✅" : "❌",
    },
  ];

  return (
    <div id="ba-dashboard__woocommerce" className="ba-dashboard__content__section">
      <h4 className="ba-dashboard__content__section__title">
        WooCommerce Overview
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
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.label}</td>
                  <td>{row.description}</td>
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
