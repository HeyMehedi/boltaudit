import { ContentLoadingStyle } from "./Style";

const ContentLoading = (props) => {
  const { style, type } = props;

  const defaultStyle = { minHeight: "150px" };
  const loaderStyle = style ? { ...defaultStyle, ...style } : defaultStyle;

  const handleContentLoading = (type) => {
    switch (type) {
      case "single":
        return (
          <span className="ba-content-loading__single ba-shimmer-effect"></span>
        );
      case "image":
        return (
          <>
            <span className="ba-content-loading__image ba-shimmer-effect"></span>
          </>
        );
      case "full":
        return (
          <div className="ba-row">
            <div className="ba-col-12" style={{ marginTop: "25px" }}>
              <div className="ba-row">
                <div className="ba-col-4">
                  <span className="ba-content-loading__single ba-shimmer-effect"></span>
                </div>
                <div className="ba-col-4">
                  <span className="ba-content-loading__single ba-shimmer-effect"></span>
                </div>
                <div className="ba-col-4">
                  <span className="ba-content-loading__single ba-shimmer-effect"></span>
                </div>
              </div>
            </div>
            <div className="ba-col-3" style={{ marginTop: "24px" }}>
              <div style={{ marginBottom: "70px", textAlign: "left" }}>
                <span className="ba-shimmer-effect"></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "75%" }}
                ></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "50%" }}
                ></span>
              </div>
              <div style={{ marginBottom: "70px", textAlign: "left" }}>
                <span className="ba-shimmer-effect"></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "75%" }}
                ></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "50%" }}
                ></span>
              </div>
              <div style={{ marginBottom: "70px", textAlign: "left" }}>
                <span className="ba-shimmer-effect"></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "75%" }}
                ></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "50%" }}
                ></span>
              </div>
              <div style={{ marginBottom: "70px", textAlign: "left" }}>
                <span className="ba-shimmer-effect"></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "75%" }}
                ></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "50%" }}
                ></span>
              </div>
              <div style={{ marginBottom: "70px", textAlign: "left" }}>
                <span className="ba-shimmer-effect"></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "75%" }}
                ></span>
                <span
                  className="ba-shimmer-effect"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div className="ba-col-9">
              <div className="ba-row">
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
                <div
                  className="ba-col-xxl-4 ba-col-6"
                  style={{ marginBottom: "24px", textAlign: "left" }}
                >
                  <span
                    className="ba-content-loading__image ba-shimmer-effect"
                    style={{ marginBottom: "20px" }}
                  ></span>
                  <span className="ba-shimmer-effect"></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "75%" }}
                  ></span>
                  <span
                    className="ba-shimmer-effect"
                    style={{ width: "50%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        );
      case "sidebar":
        return (
          <>
            <div style={{ marginBottom: "70px", textAlign: "left" }}>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div style={{ marginBottom: "70px", textAlign: "left" }}>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div style={{ marginBottom: "70px", textAlign: "left" }}>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div style={{ marginBottom: "70px", textAlign: "left" }}>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div style={{ marginBottom: "70px", textAlign: "left" }}>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
          </>
        );
      case "allTemplate":
        return (
          <div className="ba-row">
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
            <div
              className="ba-col-xxl-4 ba-col-6"
              style={{ marginBottom: "24px", textAlign: "left" }}
            >
              <span
                className="ba-content-loading__image ba-shimmer-effect"
                style={{ marginBottom: "20px" }}
              ></span>
              <span className="ba-shimmer-effect"></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "75%" }}
              ></span>
              <span
                className="ba-shimmer-effect"
                style={{ width: "50%" }}
              ></span>
            </div>
          </div>
        );
      default:
        return (
          <>
            <span className="ba-shimmer-effect"></span>
            <span
              className="ba-shimmer-effect"
              style={{ width: "75%" }}
            ></span>
            <span
              className="ba-shimmer-effect"
              style={{ width: "50%" }}
            ></span>
          </>
        );
    }
  };

  return (
    <ContentLoadingStyle
      style={loaderStyle}
      className="ba-content-loading"
    >
      {handleContentLoading(type)}
    </ContentLoadingStyle>
  );
};

export default ContentLoading;
