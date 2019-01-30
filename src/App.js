import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import Reference from './components/Reference'

class App extends Component {

    constructor() {
        super();
        this.state = {
            relayRoutes: [],
            clientRoutes: []
        };
        this.get = this.get.bind(this)
    }

    get() {
        axios.get('http://localhost:8081/v1/routes')
            .then(response => this.setState({relayRoutes: response.data}));
        axios.get('http://localhost:8080/v1/routes')
            .then(response => this.setState({clientRoutes: response.data}))
    }

    componentDidMount() {
        this.get()
    }

    render() {
        const RelayHost = "http://localhost:8081";
        const ClientHost = "http://localhost:8080";
        const RelayRef = this.state.relayRoutes.map((val) => <Reference url={RelayHost + val}/>);
        const ClientRef = this.state.clientRoutes.map((val) => <Reference url={ClientHost + val}/>);
        return (
            <div className='reference-body'>
                <h1>Relay API Reference</h1>
                <div className={'reference-container'}>
                    {RelayRef}
                </div>
                <h1>Client API Reference</h1>
                <div className={'reference-container'}>
                    {ClientRef}
                </div>
            </div>
        )
    }
}

export default App