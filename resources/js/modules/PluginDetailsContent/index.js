import ContentLoading from "@components/ContentLoading";
import { lazy, Suspense } from "@wordpress/element";

const OverviewSection = lazy(() => import("./OverviewSection"));
const PluginDetailsSection = lazy(() => import("./PluginDetailsSection"));

export default function PluginDetailsModule(plugin) {

  return (
    <>
      <Suspense fallback={<ContentLoading />}>
        <OverviewSection plugin={plugin.plugin} />
      </Suspense>
      <Suspense fallback={<ContentLoading />}>
        <PluginDetailsSection plugin={plugin.plugin} />
      </Suspense>
    </>
  );
}
