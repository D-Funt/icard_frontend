import { map } from "lodash";
import { ModalBasic } from "../../Common/ModalBasic.jsx/ModalBasic";

export function TableUsers(props) {
  const { users, updateUser } = props;

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Activo</th>
            <th>Staff</th>
          </tr>
        </thead>
        <tbody>
          {map(users, (user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.is_active ? "Sí" : "No"}</td>
              <td>{user.is_staff ? "Sí" : "No"}</td>
              <td>
                <Actions user={user} updateUser={updateUser} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { user } = props;

  return (
    <div className="flex gap-2">
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById(user.id).showModal()}
      >
        Editar
      </button>
      <button className="btn btn-secondary">Eliminar</button>
      <ModalBasic idModal={user.id} user={user} />
    </div>
  );
}
