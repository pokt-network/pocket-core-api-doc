import React, {Component} from 'react'
import './API.css'
import axios from 'axios'
import Reference from './Reference'

class API extends Component {
    // TODO add constants file for relay and client host
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
        const RelayRef = this.state.relayRoutes.map((val, key) => <Reference url={RelayHost + val} key={key}/>);
        const ClientRef = this.state.clientRoutes.map((val, key) => <Reference url={ClientHost + val} key={key}/>);
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

export default API