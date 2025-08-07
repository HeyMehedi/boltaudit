import postData from "@helper/postData";
import AppLayout from "@layout/AppLayout";
import HomepageContentSidebarModule from "@modules/HomepageContentSidebar";
import PostDetailsModule from "@modules/PostDetailsContent";
import { useEffect, useState } from "@wordpress/element";

const PostDetailsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      const res = await postData("boltaudit/posts/details");
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
    <AppLayout type="detailsHeader" page="postDetails">
      <div className="ba-dashboard__content">
        <div className="ba-dashboard__content__wrapper">
          <PostDetailsModule data={data} />
        </div>
        <HomepageContentSidebarModule />
      </div>
    </AppLayout>
  );
};

export default PostDetailsPage;
