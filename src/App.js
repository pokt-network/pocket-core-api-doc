import React, {Component} from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

    constructor() {
        super();
        this.state = {
            relayRoutes: '',
            clientRoutes: ''
        };
        this.get = this.get.bind(this)
    }

    get() {
        axios.get('http://localhost:8081/v1/routes')
            .then(response => this.setState({relayRoutes: response.data}))
        axios.get('http://localhost:8080/v1/routes')
            .then(response => this.setState({clientRoutes: response.data}))
    }

    componentDidMount() {
        this.get()
    }

    render() {
        return (
            <div className='button__container'>
                <p>{JSON.stringify(this.state.relayRoutes, null, 2)}</p>
                <br />
                <p>{JSON.stringify(this.state.clientRoutes, null, 2)}</p>
            </div>
        )
    }
}

export default App