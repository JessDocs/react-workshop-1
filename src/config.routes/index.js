import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../app'
import PokemonView from '../app/views/pokemon'

var routes = (
    <Route handler={App} >
        <DefaultRoute handler={PokemonView} />
    </Route>
)

export default routes

//<DefaultRoute handler={FilterRequests} />
