import { useEffect, useState } from "@wordpress/element";
import ReactSVG from "react-inlinesvg";

import menuIcon from "@icon/reader.svg";

const sections = [
  {
    id: "ba-dashboard__post",
    name: "Post",
  },
  {
    id: "ba-dashboard__environment",
    name: "Environment",
  },
];

const Sidebar = (props) => {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  function handleSection(item) {
    setActiveSection(item);
  }

  useEffect(() => {
    const sectionIds = sections.map((section) => section.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      let current = sectionIds[0];
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);

      setIsSidebarFixed(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`ba-dashboard__sidebar ${
        isSidebarFixed ? "sidebar-fixed" : ""
      }`}
    >
      <ul className="ba-dashboard__sidebar__menu">
        {sections.map((section) => (
          <li key={section.id} className="ba-dashboard__sidebar__menu__item">
            <a
              href={`#${section.id}`}
              className={`ba-dashboard__sidebar__menu__link ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleSection(section.id)}
            >
              <ReactSVG src={menuIcon} width={20} height={20} />
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
