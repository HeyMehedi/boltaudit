import AppLayout from "@layout/AppLayout";
import HomepageContentSidebarModule from "@modules/HomepageContentSidebar";
import HomepageContentModule from "@modules/HomepageContent";

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
