import React, {Component} from 'react'

class Attribute extends Component {
    render() {
        return (
            <div className={"attr-container"}>
                <p className={"attr-paragraph"}>{this.props.attribute}</p>
            </div>
        )
    }
}
export default Attribute;