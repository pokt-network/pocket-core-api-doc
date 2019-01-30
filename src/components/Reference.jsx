import React, {Component} from 'react'
import Attribute from './Attribute'
import axios from "axios";

class Reference extends Component {
    constructor() {
        super();
        this.state = {
            response: false
        }
    }

    getAttributes() {
        console.log(this.props.url)
        axios.get(this.props.url)
            .then(response => this.setState({response: response.data}))
    }

    componentDidMount() {
        this.getAttributes()
    }

    render() {
        return (
            <div className={"endpoint-container"}>
                <Attribute attribute={this.state.response.endpoint}/>
                <Attribute attribute={this.state.response.method}/>
                <Attribute attribute={this.state.response.params}/>
                <Attribute attribute={this.state.response.returns}/>
                <Attribute attribute={this.state.response.example}/>
            </div>
        )
    }
}

export default Reference;