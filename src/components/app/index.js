import React, {Component} from 'react';
import './App.css';
import Main from "../Main";

class Index extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className='app-title'>TV Series</h1>
                </header>
                <Main />
            </div>
        );
    }
}

export default Index;
