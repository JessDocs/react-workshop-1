import  React, { PropTypes } from 'react'

const List = React.createClass ({

    propTypes: {
        pokemon: PropTypes.array
    },

    render() {

        const { pokemon } = this.props

        return (
            <ul>
                { pokemon.map (_renderPokemon) }
            </ul>
        )
    }
})

export default List

function _renderPokemon (pokemon) {
    return (
        <li> {pokemon.name} </li>
    )
}

