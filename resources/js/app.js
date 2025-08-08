import Preloader from "@components/Preloader";
import { createRoot, lazy, Suspense, useState } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const HomePage = lazy(() => import("./pages/HomePage"));
const PluginDetailsPage = lazy(() => import("./pages/PluginDetails"));
const PostDetailsPage = lazy(() => import("./pages/PostDetails"));

function App() {
  const [dir, setDir] = useState("ltr");
  const [dataFetched, setDataFetched] = useState(false);

  const theme = {
    direction: dir,
  };

  setTimeout(() => {
    setDataFetched(true);
  }, 3000);

  const adminRoutes = applyFilters("ba_dashboard_routes", [
    {
      path: `/*`,
      element: <HomePage />,
    },
    {
      path: `/plugin/:slug`,
      element: <PluginDetailsPage />,
    },
    {
      path: `/posts`,
      element: <PostDetailsPage />,
    },
  ]);

  const preloaderStyle = {
    maxHeight: "unset",
  };

  return (
    <>
      <HashRouter>
        <Suspense fallback={<Preloader style={preloaderStyle} />}>
          {dataFetched ? (
            <ThemeProvider theme={theme}>
              <Routes>
                {adminRoutes.map((routeItem, index) => {
                  return (
                    <Route
                      key={index}
                      path={routeItem.path}
                      element={routeItem.element}
                    ></Route>
                  );
                })}
              </Routes>
            </ThemeProvider>
          ) : (
            <Preloader type="full" style={preloaderStyle} />
          )}
        </Suspense>
      </HashRouter>
    </>
  );
}

function initializeApp(container) {
  if (createRoot) {
    const root = createRoot(container);

    root.render(
      <div>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </div>
    );
  } else {
    render(
      <div>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </div>,
      container
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#ba-dashboard-app");

  if (!container) {
    return;
  }

  initializeApp(container);
});
