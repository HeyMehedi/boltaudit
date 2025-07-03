import { useState } from "@wordpress/element";
import ReactSVG from "react-inlinesvg";

// Import Images
import copyIcon from "@icon/copy.svg";
import linkIcon from "@icon/link.svg";

export default function APISection() {
  const [copied, setCopied] = useState(false);
  const zoneID = "123456";

  function handleCopy(text) {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.clipboard &&
      window.isSecureContext
    ) {
      window.navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch((err) => {
          console.error("Clipboard write failed: ", err);
        });
    } else {
      console.warn("Clipboard API not available or insecure context");
    }
  }

  return (
    <div className="ba-dashboard__content__sidebar__widget__single">
      <div className="ba-dashboard__content__sidebar__widget__single__top">
        <h4 className="ba-dashboard__content__sidebar__widget__single__title">
          API
        </h4>
      </div>
      <div className="ba-dashboard__content__sidebar__widget__single__content">
        <ul className="ba-dashboard__content__sidebar__widget__info">
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <span className="ba-dashboard__content__sidebar__widget__single__subtitle">
              Zone ID
            </span>
            <span
              className="ba-dashboard__content__sidebar__widget__single__code"
              onClick={() => handleCopy(zoneID)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              {zoneID}
              <ReactSVG src={copyIcon} width={16} height={16} />
              {copied && (
                <span
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "0",
                    background: "#000",
                    color: "#fff",
                    fontSize: "10px",
                    padding: "2px 4px",
                    borderRadius: "2px",
                  }}
                >
                  Copied!
                </span>
              )}
            </span>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <a
              href="#"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              Get your API token
            </a>
          </li>
          <li className="ba-dashboard__content__sidebar__widget__info__item">
            <a
              href="#"
              className="ba-dashboard__content__sidebar__widget__info__link"
            >
              API documentation
              <ReactSVG src={linkIcon} width={16} height={16} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
