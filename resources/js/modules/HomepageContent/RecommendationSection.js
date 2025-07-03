import { useState } from "@wordpress/element";

export default function RecommendationSection() {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        id="ba-dashboard__recommendation"
        className="ba-dashboard__content__section ba-dashboard__content__section--recommendation"
      >
        <div
          className="ba-dashboard__content__section__top"
          style={{ marginBottom: !isOpen ? "0" : null }}
        >
          <h4 className="ba-dashboard__content__section__title">
            Recommendations
          </h4>

          <button
            className="ba-dashboard__content__section__toggle"
            onClick={handleToggle}
          >
            {isOpen ? "Hide" : "Show"}
          </button>
        </div>
        {isOpen && (
          <div className="ba-dashboard__content__section__content">
            <h6 className="ba-dashboard__content__section__title--recommendation">
              Plugins
            </h6>

            <p className="ba-dashboard__content__section__desc--recommendation">
              Review HTTP/S requests processed by Cloudfare to assess theats and
              tune configurations.
            </p>
            <a
              href="#"
              className="ba-dashboard__content__section__btn ba-dashboard__btn ba-dashboard__btn--sm"
            >
              Go to speed optimization
            </a>
          </div>
        )}
      </div>
    </>
  );
}
