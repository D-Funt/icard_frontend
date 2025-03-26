import { LoginForm } from "./LoginForm";
import "./LoginAdmin.css";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h1>Login Admin</h1>
        <LoginForm />
      </div>
    </div>
  );
}
