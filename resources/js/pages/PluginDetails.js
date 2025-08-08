import postData from "@helper/postData";
import AppLayout from "@layout/AppLayout";
import ContentSidebarModule from "@modules/PluginContentSidebar";
import PluginDetailsModule from "@modules/PluginDetailsContent";
import { useEffect, useState } from "@wordpress/element";
import { useParams } from "react-router-dom";

const PluginDetailsPage = () => {
  const [plugin, setPlugin] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    let pluginLoaded = false;

    async function fetchPage() {
      const res = await postData(`boltaudit/plugin/${slug}`);

      if (!res || pluginLoaded) return;

      setPlugin(res);
    }

    fetchPage();

    return () => {
      pluginLoaded = true;
    };
  }, []);

  return (
    <AppLayout>
      <div className="ba-dashboard__content">
        <div className="ba-dashboard__content__wrapper">
          <PluginDetailsModule plugin={plugin} />
        </div>

        <ContentSidebarModule plugin={plugin} />
      </div>
    </AppLayout>
  );
};

export default PluginDetailsPage;
