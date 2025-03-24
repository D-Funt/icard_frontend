import { AdminLayout } from "../layouts/AdminLayout/AdminLayout"
import { LoginAdmin } from "../pages/Admin/LoginAdmin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: LoginAdmin,
        exact: true
    }
]

export default routesAdmin
