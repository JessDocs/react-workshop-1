import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

//import Showcase from './components/org.Showcase'
import List from './components/mol.List'
import { submitPokemon } from './state/actions'

const PokemonView = React.createClass({

    getInitialState () {
        return {
            inputValue: ''
        }
    },

    propTypes: {
      pkmn: PropTypes.array,
        dispatch: PropTypes.func

    },

    updateInput (e) {
        this.setState({
            inputValue: e.target.value
        })
    },

    onUpdate() {
        const { inputValue } = this.state
        const { dispatch } = this.props

        dispatch(submitPokemon({
            name: inputValue
        }))
        //console.log(`${inputValue}!!!`)
    },

    render() {

        const {inputValue } = this.state
        const { pkmn } = this.props

        return (
            <div>
                Gotta catch em all
                <form>
                    <input onChange={this.updateInput} />
                </form>

                {inputValue}
                <button onClick={this.onUpdate}>Add</button>
                <List pokemon={pkmn} />
            </div>
        )
    }
})

export default connect(selector)(PokemonView)

function selector (state) {

    const { pokemon } = state

    return {
        pkmn: pokemon
    }

    //return {
    //    pkmn: [
    //    {
    //        name: 'Hallo'
    //    },
    //    {
    //        name: 'Charmander'
    //    },
    //    {
    //        name: 'Bulbasaur'
    //    },
    //    {
    //        name: 'Squirtle'
    //    }]
    //}
}