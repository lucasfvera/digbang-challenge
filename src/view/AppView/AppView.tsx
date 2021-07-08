/**
 * Here goes the main app visual structure
 * divided by sections like header/main/footer or NavBar/Body/Sidebar
 */

import React from 'react'
import AppRouter from '../Routing/AppRouter'

const AppView = () => {
    return (
    <div id="main-body-container">
        <AppRouter />
    </div>
    )
}

export default AppView
