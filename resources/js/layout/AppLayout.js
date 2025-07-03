import Header from "@layout/Header";
import Sidebar from "@layout/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="ba-dashboard">
      <Header />
      <div className="ba-dashboard__wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
