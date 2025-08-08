import ContentLoading from "@components/ContentLoading";
import { lazy, Suspense } from "@wordpress/element";

const QuickInfoSection = lazy(() => import("./QuickInfoSection"));

export default function ContentSidebarModule(plugin) {
  return (
    <div className="ba-dashboard__content__sidebar">
      <div className="ba-dashboard__content__sidebar__widget">
        <Suspense fallback={<ContentLoading />}>
          <QuickInfoSection plugin={plugin.plugin} />
        </Suspense>
      </div>
    </div>
  );
}
