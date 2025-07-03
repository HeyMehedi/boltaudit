import AppLayout from "@layout/AppLayout";
import HomepageContentModule from "@modules/HomepageContent";
import HomepageContentSidebarModule from "@modules/HomepageContentSidebar";

const SectionContent = () => {
  return (
    <AppLayout>
      <div className="ba-dashboard__content">
        <div className="ba-dashboard__content__wrapper">
          <HomepageContentModule />

          {/* <HomepageFooterModule /> */}
        </div>

        <HomepageContentSidebarModule />
      </div>
    </AppLayout>
  );
};

export default SectionContent;
