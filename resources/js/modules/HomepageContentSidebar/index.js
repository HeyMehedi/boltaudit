import { lazy, Suspense } from "@wordpress/element";
import ContentLoading from "@components/ContentLoading";

const NavSection = lazy(() => import("./NavSection"));
const QuickInfoSection = lazy(() => import("./QuickInfoSection"));
const SubscriptionSection = lazy(() => import("./SubscriptionSection"));
const RegistrationSection = lazy(() => import("./RegistrationSection"));
const ActionSection = lazy(() => import("./ActionSection"));
const APISection = lazy(() => import("./APISection"));

// Import Images

export default function HomepageContentSidebarModule() {
  return (
    <div className="ba-dashboard__content__sidebar">
      <div className="ba-dashboard__content__sidebar__widget">
        {/* <Suspense fallback={<ContentLoading />}>
          <NavSection />
        </Suspense>
        <Suspense fallback={<ContentLoading />}>
          <QuickInfoSection />
        </Suspense>
        <Suspense fallback={<ContentLoading />}>
          <SubscriptionSection />
        </Suspense>
        <Suspense fallback={<ContentLoading />}>
          <RegistrationSection />
        </Suspense>
        <Suspense fallback={<ContentLoading />}>
          <APISection />
        </Suspense>
        <Suspense fallback={<ContentLoading />}>
          <ActionSection />
        </Suspense> */}
      </div>
    </div>
  );
}
