import React, {Component} from 'react'
import "./Attribute.css"

class Attribute extends Component {
    render() {
        return (
            <div className={"attr-container"}>
                {this.props.attribute}
            </div>
        )
    }
}

export default Attribute;