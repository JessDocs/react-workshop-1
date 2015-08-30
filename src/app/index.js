//import './styles/main'
import React, { PropTypes } from 'react'
import { RouteHandler } from 'react-router'
//import { connect } from 'react-redux'
//import { initApp } from './state/actions'

const App = React.createClass({

    propTypes: {
        dispatch: PropTypes.func
    },

    render () {
        return (
            <div>
                Hello World!
                <RouteHandler/>
            </div>
        )
    }

})

    //<RouteHandler />


//export default connect()(App)
export default App
