import ContentLoading from "@components/ContentLoading";
import { lazy, Suspense } from "@wordpress/element";
import DatabaseSection from "./DatabaseSection";

const OverviewSection = lazy(() => import("./OverviewSection"));
const RecommendationSection = lazy(() => import("./RecommendationSection"));
const PluginsSection = lazy(() => import("./PluginsSection"));
const ThemeSection = lazy(() => import("./ThemeSection"));
const PostSection = lazy(() => import("./PostSection"));
const WoocommerceSection = lazy(() => import("./WoocommerceSection"));
const EnvironmentSection = lazy(() => import("./EnvironmentSection"));

export default function HomepageContentModule() {
  return (
    <>
      <Suspense fallback={<ContentLoading />}>
        <OverviewSection />
      </Suspense>
      {/* <Suspense fallback={<ContentLoading />}>
        <RecommendationSection />
      </Suspense> */}
      {/*<Suspense fallback={<ContentLoading />}>
        <ThemeSection />
      </Suspense> */}
      <Suspense fallback={<ContentLoading />}>
        <PostSection />
      </Suspense>
      <Suspense fallback={<ContentLoading />}>
        <DatabaseSection />
      </Suspense>
      <Suspense fallback={<ContentLoading />}>
        <PluginsSection />
      </Suspense>
      <Suspense fallback={<ContentLoading />}>
        <WoocommerceSection />
      </Suspense>
      <Suspense fallback={<ContentLoading />}>
        <EnvironmentSection />
      </Suspense>
    </>
  );
}
