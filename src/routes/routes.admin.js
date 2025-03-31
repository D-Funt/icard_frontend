import { AdminLayout } from "../layouts/AdminLayout/AdminLayout"
import { HomeAdmin } from "../pages/Admin/HomeAdmin"
import UsersAdmin from "../pages/Admin/UsersAdmin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true
    }
]

export default routesAdmin
