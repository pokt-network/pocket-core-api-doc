import React, {Component} from 'react'
import "./Attribute.css"

class Attribute extends Component {
    render() {
        return (
            <div className={"attr-container"}>
                {/*is pre formatted*/}
                {this.props.attribute}
            </div>
        )
    }
}

export default Attribute;