import { LoginAdmin } from "../../pages/Admin/LoginAdmin";
import { useAuth } from "../../hooks/useAuth";
import TopMenu from "../../pages/Admin/TopMenu/TopMenu";
import { SideMenu } from "../../pages/Admin/SideMenu/SideMenu";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth) {
    return <LoginAdmin />;
  }

  return (
    <div className="admin-layout">
      <div className="admin-layout__top-menu">
        <TopMenu />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,1fr)] admin-layout__content">
        <SideMenu />
        <div>{children}</div>
      </div>
    </div>
  );
}
