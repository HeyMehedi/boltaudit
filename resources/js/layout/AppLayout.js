import Header from "@layout/Header";
import Sidebar from "@layout/Sidebar";
import { useParams } from "react-router-dom";

const AppLayout = ({ children }) => {
  const { slug } = useParams();
  const type = slug ? "detailsHeader" : null;

  return (
    <div className="ba-dashboard">
      <Header type={type} />
      <div className="ba-dashboard__wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
