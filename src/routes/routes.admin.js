import { AdminLayout } from "../layouts/AdminLayout/AdminLayout"
import { LoginAdmin } from "../pages/Admin/LoginAdmin"
import { HomeAdmin } from "../pages/Admin/HomeAdmin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    }
]

export default routesAdmin
