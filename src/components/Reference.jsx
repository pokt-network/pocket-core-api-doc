import React, {Component} from 'react'
import Attribute from './Attribute'
import axios from "axios";
import './Reference.css'

class Reference extends Component {
    constructor() {
        super();
        this.state = {
            response: false
        }
    }

    getAttributes() {
        axios.get(this.props.url)
            .then(response => this.setState({response: response.data}))
    }

    componentDidMount() {
        this.getAttributes()
    }

    render() {
        let params;
        if (this.state.response !== false) {
            params = JSON.parse(this.state.response.params)
        }
        return (
            <div className={"reference-wrapper"}>
                <div className={"ref-container"}>
                    <h3 className={"attr-label"}>Name</h3>
                    <Attribute attribute={this.state.response.method}/>
                    <h3 className={"attr-label"}>Path</h3>
                    <Attribute attribute={this.state.response.endpoint}/>
                    <h3 className={"attr-label"}>Parameters</h3>
                    <Attribute attribute={<pre>{JSON.stringify(params, null, 2)}</pre>}/>
                    <h3 className={"attr-label"}>Returns</h3>
                    <Attribute attribute={this.state.response.returns}/>
                    <h3 className={"attr-label"}>Example</h3>
                    <Attribute attribute={"curl --data {params object} " + this.state.response.endpoint}/>
                </div>
            </div>
        )
    }
}

export default Reference;