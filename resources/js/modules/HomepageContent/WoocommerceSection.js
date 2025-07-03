import CountUp from "@components/CountUp";
import { useState } from "@wordpress/element";

export default function WoocommerceSection() {
  const data = {
    php: {
      version: "8.2.27",
      sapi: "fpm-fcgi",
      user: "heymehedi",
      ini_values: {
        max_execution_time: "1200",
        memory_limit: "256M",
        upload_max_filesize: "300M",
        post_max_size: "1000M",
        display_errors: "1",
        log_errors: "1",
      },
      extensions: [
        "Core",
        "FFI",
        "PDO",
        "Phar",
        "Reflection",
        "SPL",
        "SimpleXML",
        "Zend OPcache",
        "bcmath",
        "bz2",
        "calendar",
        "cgi-fcgi",
        "ctype",
        "curl",
        "date",
        "dom",
        "exif",
        "fileinfo",
        "filter",
        "ftp",
        "gd",
        "gettext",
        "hash",
        "iconv",
        "imagick",
        "intl",
        "json",
        "libxml",
        "mbstring",
        "mysqli",
        "mysqlnd",
        "openssl",
        "pcntl",
        "pcre",
        "pdo_mysql",
        "pdo_sqlite",
        "posix",
        "random",
        "readline",
        "session",
        "shmop",
        "soap",
        "sockets",
        "sodium",
        "sqlite3",
        "standard",
        "sysvmsg",
        "sysvsem",
        "sysvshm",
        "tidy",
        "tokenizer",
        "xdebug",
        "xml",
        "xmlreader",
        "xmlwriter",
        "xsl",
        "zip",
        "zlib",
      ],
      error_reporting: 4983,
    },
    server: {
      software: "nginx/1.26.1",
      address: "127.0.0.1",
      os: "Darwin 24.5.0",
      host: "heymehedi",
      arch: "x86_64",
    },
    wordpress: {
      version: "6.8.1",
      constants: {
        WP_DEBUG: false,
        WP_DEBUG_DISPLAY: true,
        WP_DEBUG_LOG: false,
        SCRIPT_DEBUG: false,
        WP_CACHE: false,
        CONCATENATE_SCRIPTS: null,
        COMPRESS_SCRIPTS: null,
        COMPRESS_CSS: null,
      },
      environment_type: "local",
      development_mode: "",
    },
    database: {
      database_name: "local",
      database_user: "root",
      database_host: "localhost",
      server_version: "8.0.35",
    },
  };

  const tabKeys = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

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

  const flattenedActiveData = flattenOneLevel(data[activeTab]);

  return (
    <div
      id="ba-dashboard__woocommerce"
      className="ba-dashboard__content__section"
    >
      <h4 className="ba-dashboard__content__section__title">Woocommerce</h4>

      <p className="ba-dashboard__content__section__desc">
        Review HTTP/S requests processed by Cloudfare to assess threats and tune
        configurations.
      </p>
      <a
        href="#"
        className="ba-dashboard__content__section__btn ba-dashboard__btn"
      >
        Security analytics documentation
      </a>

      <div className="ba-dashboard__content__section__content">
        {/* overview counts */}
        <div className="ba-dashboard__content__section__overview">
          {[
            { title: "Total", count: 5.92 },
            { title: "Types", count: 6.54 },
            { title: "Meta", count: 8.36 },
            { title: "Revisions", count: 4.79 },
            { title: "Total", count: 8.75 },
            { title: "Types", count: 6.47 },
            { title: "Meta", count: 9.58 },
            { title: "Revisions", count: 7.92 },
          ].map((item, index) => (
            <div
              key={index}
              className="ba-dashboard__content__section__overview__single"
            >
              <span className="ba-dashboard__content__section__overview__title">
                {item.title}
              </span>
              <span className="ba-dashboard__content__section__overview__count">
                <CountUp target={item.count} float={true} />K
              </span>
            </div>
          ))}
        </div>

        {/* tabs */}
        <div className="ba-dashboard__content__section__data">
          <div className="ba-dashboard__tab">
            <ul className="ba-dashboard__tab__list">
              {tabKeys.map((tabKey) => (
                <li
                  key={tabKey}
                  className={`ba-dashboard__tab__item ${
                    activeTab === tabKey ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                </li>
              ))}
            </ul>

            <div className="ba-dashboard__tab__content">
              <div className="ba-dashboard__tab__content__wrap">
                {Object.entries(flattenedActiveData).map(([key, value]) => (
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
