
/**
 * Declaration file for routes in the project
 * it includes the path and the Screen that renders in the main body
 * This file could be divided also in sub routes to help modularity
 */

import CreditSimulatorScreen from "../Screens/CreditSimulator"
import NotFound404Screen from "../Screens/Errors/NotFound404.screen"

export const routes: Types.RouteObject[] = [
    {
        path: '/credit-simulator',
        component: CreditSimulatorScreen
    },
    {
        path: '/404-not-found',
        component: NotFound404Screen
    }
]

export default routes