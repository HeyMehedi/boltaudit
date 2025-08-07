import Header from "@layout/Header";
import Sidebar from "@layout/Sidebar";
import { useParams } from "react-router-dom";

// Generic application layout used across all pages. The layout can be
// customized via the optional `type` and `page` props allowing details pages
// (such as plugins or posts) to reuse the same structure while updating the
// header and sidebar navigation.
const AppLayout = ({ children, type: forcedType, page: forcedPage }) => {
  const { slug } = useParams();
  // When a slug exists (e.g., plugin detail pages), show the details header by
  // default. For other pages the type/page can be explicitly provided.
  const type = forcedType || (slug ? "detailsHeader" : null);
  const page = forcedPage || (slug ? "pluginDetails" : null);

  return (
    <div className="ba-dashboard">
      <Header type={type} />
      <div className="ba-dashboard__wrapper">
        <Sidebar type={type} page={page} />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
