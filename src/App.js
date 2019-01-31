import React, {Component} from 'react'
import './App.css'
import API from "./components/API";
import Head from "./components/Header"

class App extends Component {
    render() {
        return (
            <div className={'app-container'}>
                <Head/>
                <API/>
            </div>
        )
    }
}

export default App