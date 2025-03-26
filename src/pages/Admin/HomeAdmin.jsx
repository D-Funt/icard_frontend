import { useAuth } from "../../hooks/useAuth";

export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div className="home-admin">
      <div className="home-admin__content">
        <h1>Home Admin</h1>
        <button className="btn" onClick={logout}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
}
