// Import Images
import Logo from "@images/logo.svg";

export default function HomepageContentSidebarModule() {
  return (
    <div className="ba-dashboard__content__footer">
      <img className="ba-dashboard__content__footer__logo" src={Logo} alt="Footer Logo" />
      <span className="ba-dashboard__content__footer__copyright">
        © BoltAudit 2025. All rights reserved.
      </span>
      <a href="#" className="ba-dashboard__content__footer__contact">
        Contact
      </a>
    </div>
  );
}
