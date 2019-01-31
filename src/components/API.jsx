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
                <h2>Relay API Reference</h2>
                <p>
                    Pocket Core's Relay RPC is for all things 2nd layer specific.
                    What is meant by this is any API call that does not pertain to the Pocket Blockchain will be
                    accessed through this endpoint.
                    Think Dispatching, Servicing, Validating, and Sessions.
                </p>
                <div className={'reference-container'}>
                    {RelayRef}
                </div>
                <h2>Client API Reference</h2>
                <p>
                    Pocket Core's Client RPC is for all things blockchain specific.
                    What is meant by this is any API call that does pertaining to the Pocket Blockchain will be
                    accessed through this endpoint.
                    Think anything that could be found withing Bitcoin or Ethereum will be accessed through this
                    endpoint.
                </p>
                <div className={'reference-container'}>
                    {ClientRef}
                </div>
            </div>
        )
    }
}

export default API