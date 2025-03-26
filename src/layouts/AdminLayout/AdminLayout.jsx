import { LoginAdmin } from "../../pages/Admin/LoginAdmin";
import { useAuth } from "../../hooks/useAuth";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth) {
    return <LoginAdmin />;
  }

  return <div>{children}</div>;
}
