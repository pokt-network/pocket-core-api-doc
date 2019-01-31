import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className={"header-wrapper"}>
                <div className={"header-container"}>
                    <h2>Welcome to Pocket Core MVP Docs</h2>
                    <p>This simple API guide is an easy to use reference for Pocket Core (MVP). Pocket Core's API
                        may be designed differently then API's you have seen before.
                        It is a blend between a RESTful and a JSON RPC architecture.
                        Using the guide below, it should be very apparent how to access the API from each endpoint.
                        <br/><br/>
                        <em>Just a tip:</em> this guide is simply a front end to a series of already exposed GET
                        requests.
                        So if you're running a PC instance, just go to localhost:port/v1/routes to see all the possible
                        routes and visit each route through your browser to see a local JSON version of this guide!</p>
                </div>
            </div>
        )
    }
}

export default Header;