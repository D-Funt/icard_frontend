import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../hooks/useUser";

export function AddEditUserForm(props) {
  const { handleRefetch } = props;
  const { addUser } = useUser();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await addUser(formData);
        console.log("User added successfully");
        handleRefetch();
      } catch (error) {
        console.error(error);
      }
      document.getElementById("my_modal_1").close();
    },
  });

  return (
    <div>
      <h3 className="font-bold text-lg">Agregar/Editar Usuario</h3>
      <form onSubmit={formik.handleSubmit}>
        <fieldset className="fieldset bg-base-200 p-4 rounded-box">
          <label className="fieldset-label">Nombre de usuario</label>
          <input
            type="text"
            className="input"
            placeholder="Nombre de usuario"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onError={formik.errors.username}
          />

          <label className="fieldset-label">Email</label>
          <input
            type="text"
            className="input"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onError={formik.errors.email}
          />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onError={formik.errors.password}
          />

          <label className="fieldset-label">First Name</label>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onError={formik.errors.first_name}
          />

          <label className="fieldset-label">Last Name</label>
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onError={formik.errors.last_name}
          />

          <div className="flex mt-2 mb-2">
            <input
              type="checkbox"
              checked={formik.values.is_active}
              onChange={(e) =>
                formik.setFieldValue("is_active", e.target.checked)
              }
              style={{ height: "20px", width: "20px" }}
            />
            <p className="pl-4 content-center">Activo </p>
          </div>
          <div className="flex mt-2 mb-2">
            <input
              type="checkbox"
              checked={formik.values.is_staff}
              onChange={(e) =>
                formik.setFieldValue("is_staff", e.target.checked)
              }
              style={{ height: "20px", width: "20px" }}
            />
            <p
              className="pl-4 content-center
            "
            >
              Admin{" "}
            </p>
          </div>
        </fieldset>
        <div>
          <button type="submit" className="btn" style={{ margin: "10px" }}>
            Save
          </button>
          <button className="btn" style={{ margin: "10px" }}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

function initialValues() {
  return {
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    is_active: true,
    is_staff: false,
  };
}

function newSchema() {
  return {
    username: Yup.string()
      .required(true)
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .required(true)
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    first_name: Yup.string(),
    last_name: Yup.string(),
    is_active: Yup.boolean().required("Required"),
    is_staff: Yup.boolean().required("Required"),
  };
}
