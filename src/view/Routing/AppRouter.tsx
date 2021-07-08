/**
 * Main routing file that maps the routes specified in the config file
 */
import React from 'react'
import { Switch, Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import routes from './routes'

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route => <Route exact {...route}/>)}
            <Route exact path="/">
                <Redirect to="/credit-simulator" />
            </Route>
            <Redirect to="/404-not-found" />
        </Switch>
    )
}

export default AppRouter
