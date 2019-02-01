import React, {Component} from 'react'
import './API.css'
import axios from 'axios'
import Reference from './Reference'
import * as Constants from '../data/constants'

class API extends Component {
    constructor() {
        super();
        this.state = {
            relayRoutes: [],
            clientRoutes: []
        };
        this.getRoutes = this.getRoutes.bind(this)
    }

    getRoutes() {
        // get relay routes
        axios.get(Constants.RAPIURL + "/v1/routes")
            .then(response => this.setState({relayRoutes: response.data}))
            .catch((err) => {
                console.log(err.toString())
            });
        // get client routes
        axios.get(Constants.CAPIURL + "/v1/routes")
            .then(response => this.setState({clientRoutes: response.data}))
            .catch((err) => {
                console.log(err.toString())
            });
    }

    componentDidMount() {
        // API req before render
        this.getRoutes()
    }

    render() {
        // map all of the relay routes into reference components
        const RelayRef = this.state.relayRoutes.map((val, key) =>
            <Reference url={Constants.RAPIURL + val} key={key}/>);
        // map all client routes into reference components
        const ClientRef = this.state.clientRoutes.map((val, key) =>
            <Reference url={Constants.CAPIURL + val} key={key}/>);
        return (
            <div className='reference-body'>
                <h2>Relay API Reference</h2>
                <p>
                    Pocket Core's Relay RPC is for all things 2nd layer specific.
                    What is meant by this is any API call that does not pertain to the Pocket Blockchain will be
                    accessed through this endpoint.
                    Think dispatching, servicing, validating, and sessions.
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