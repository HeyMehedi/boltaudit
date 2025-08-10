import postData from "@helper/postData";
import AppLayout from "@layout/AppLayout";
import HomepageContentSidebarModule from "@modules/HomepageContentSidebar";
import DatabaseDetailsModule from "@modules/DatabaseDetailsContent";
import { useEffect, useState } from "@wordpress/element";

const DatabaseDetailsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      const res = await postData("boltaudit/database/details");
      if (!cancelled) {
        setData(res);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AppLayout type="detailsHeader" page="databaseDetails">
      <div className="ba-dashboard__content">
        <div className="ba-dashboard__content__wrapper">
          <DatabaseDetailsModule data={data} />
        </div>
        <HomepageContentSidebarModule />
      </div>
    </AppLayout>
  );
};

export default DatabaseDetailsPage;
