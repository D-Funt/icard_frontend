import "./SideMenu.css";
import { useLocation, Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

export function SideMenu({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="side-menu">
      <div className="side-menu__content">
        <MenuLeft pathname={pathname} />
        <div>{children}</div>
      </div>
    </div>
  );
}

function MenuLeft() {
  const { auth } = useAuth();

  console.log(auth);

  return (
    <div className="menu-left">
      <div className="menu-left__content">
        <Link to="/admin" className="grid grid-cols-3">
          <div className="col-span-1 place-content-center">
            <svg
              width="20px"
              stroke-width="1.5"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="align-baseline"
            >
              <path
                d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M6 17L20 17"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M6 21L20 21"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9 7L15 7"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <h5>Pedidos</h5>
        </Link>
        <Link className="grid grid-cols-3" to="/admin/tables">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            className="col-span-1"
          >
            <path
              d="M4 7L4 17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 7L23 7"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 10L20 10"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 7L20 17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h5>Mesas</h5>
        </Link>
        {auth.me?.is_staff && (
          <Link className="grid grid-cols-3" to="/admin/users">
            <svg
              width="20px"
              height="20px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="col-span-1"
            >
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.364 16.7069L21.6603 18.7069C21.8393 19.915 20.9020 21 19.6819 21H16.3181C15.0968 21 14.1607 19.915 14.3397 18.7069L14.636 16.7069C14.7813 15.7262 15.6231 15 16.6144 15H19.3856C20.3769 15 21.2187 15.7262 21.364 16.7069Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M17 13H19"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h5>Usuarios</h5>
          </Link>
        )}
        <Link className="grid grid-cols-3" to="/admin/tables">
          <svg
            width="20px"
            height="20px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            className="col-span-1"
          >
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.364 16.7069L21.6603 18.7069C21.8393 19.915 20.9020 21 19.6819 21H16.3181C15.0968 21 14.1607 19.915 14.3397 18.7069L14.636 16.7069C14.7813 15.7262 15.6231 15 16.6144 15H19.3856C20.3769 15 21.2187 15.7262 21.364 16.7069Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 13H19"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h5>Historial de pago</h5>
        </Link>
        <Link className="grid grid-cols-3" to="/admin/tables">
          <svg
            width="20px"
            height="20px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            className="col-span-1"
          >
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.364 16.7069L21.6603 18.7069C21.8393 19.915 20.9020 21 19.6819 21H16.3181C15.0968 21 14.1607 19.915 14.3397 18.7069L14.636 16.7069C14.7813 15.7262 15.6231 15 16.6144 15H19.3856C20.3769 15 21.2187 15.7262 21.364 16.7069Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 13H19"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h5>Categories</h5>
        </Link>
        <Link className="grid grid-cols-3" to="/admin/tables">
          <svg
            width="20px"
            height="20px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            className="col-span-1"
          >
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.364 16.7069L21.6603 18.7069C21.8393 19.915 20.9020 21 19.6819 21H16.3181C15.0968 21 14.1607 19.915 14.3397 18.7069L14.636 16.7069C14.7813 15.7262 15.6231 15 16.6144 15H19.3856C20.3769 15 21.2187 15.7262 21.364 16.7069Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 13H19"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h5>Products</h5>
        </Link>
      </div>
    </div>
  );
}
