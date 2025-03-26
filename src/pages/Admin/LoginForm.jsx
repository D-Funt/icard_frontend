import "./LoginForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../api/user";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (formData) => {
      try {
        const response = await loginApi(formData);
        const { access } = response;
        login(access);
        toast.warn(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Correo electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mb-4">
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-block">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
