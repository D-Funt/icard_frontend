import { ClientLayout } from "../layouts/ClientLayout/ClientLayout"
import { Home } from "../pages/Client/Home"
import { Error404 } from "../pages/Error404"

const routesClient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact: true
    }
]

export default routesClient