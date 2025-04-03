import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { HeaderPage } from "./HeaderPage";
import { TableUsers } from "./TableUsers/TableUsers";
import { ModalBasic } from "../Common/ModalBasic.jsx/ModalBasic";
import { AddEditUserForm } from "./Users/EditUserForm";

export default function UsersAdmin() {
  const { loading, error, users, getUsers } = useUser();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getUsers();
  }, [refetch]);

  const handleRefetch = () => {
    setRefetch((prev) => !prev);
  };

  const updateUser = async (data) => {
    console.log("Update user", data);
  };

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Crear Usuario"
        btnClick={() =>
          document.getElementById("modal_create_user").showModal()
        }
      />
      {loading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : (
        <TableUsers users={users} updateUser={updateUser} />
      )}
      <ModalBasic idModal="modal_create_user">
        <AddEditUserForm
          handleRefetch={handleRefetch}
          idModal="modal_create_user"
        />
      </ModalBasic>
    </>
  );
}
